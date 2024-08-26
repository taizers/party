import {
  FileUpload,
  FileUploadHandlerEvent,
  FileUploadRemoveEvent,
} from 'primereact/fileupload';
import { FC, useEffect, useRef, useState } from 'react';
import { photosApiSlice } from '../store/reducers/PhotosApiSlice';
import { useShowErrorToast } from '../hooks';
import { fileResponse } from '../types/responce';
import { Tooltip } from 'primereact/tooltip';

interface FileUploaderProps {
  path?: string;
  maxSize?: number;
  setFilesLinks: (data: fileResponse[]) => void;
}

const FileUploader: FC<FileUploaderProps> = ({
  path = '/photo',
  maxSize = 100000,
  setFilesLinks,
}) => {
  const fileUploadRef = useRef<FileUpload>(null!);
  const [mediaList, setMediaList] = useState<File[]>([]);
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const [addPhoto, { data, error }] = photosApiSlice.useAddPhotoMutation();

  useShowErrorToast(error);

  const uploadHandler = (e: FileUploadHandlerEvent) => {
    const photos = new FormData();

    e.files?.map((image) => {
      setMediaList((prev) => [...prev, image]);
      photos.append('files', image);
    });

    addPhoto(photos);
  };

  const onRemove = (event: FileUploadRemoveEvent) => {
    const fileToRemove = event.file;
    const updatedFiles = mediaList.filter(
      (file) => file.name !== fileToRemove.name
    );
    setMediaList(updatedFiles);
  };
  const onClear = () => {
    if (fileUploadRef.current) {
      fileUploadRef.current.clear();
      setMediaList([]);
    }
  };

  useEffect(() => {
    if (fileUploadRef.current && data) {
      fileUploadRef.current.clear();
      fileUploadRef.current.setUploadedFiles(mediaList);
      setDisabled(true);
      setFilesLinks(data);
    }
  }, [data]);

  const chooseOptions = {
    icon: 'pi pi-fw pi-images',
    iconOnly: true,
    className: 'custom-choose-btn p-button-rounded p-button-outlined',
  };
  const uploadOptions = {
    icon: 'pi pi-fw pi-cloud-upload',
    iconOnly: true,
    className:
      'custom-upload-btn p-button-success p-button-rounded p-button-outlined',
  };
  const cancelOptions = {
    disabled: isDisabled,
    icon: 'pi pi-fw pi-times',
    iconOnly: true,
    className:
      'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined',
  };

  return (
    <>
      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
      <FileUpload
        customUpload
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
        ref={fileUploadRef}
        uploadHandler={uploadHandler}
        onClear={onClear}
        onRemove={onRemove}
        name="fileUpload"
        url={path}
        multiple
        accept="image/*"
        maxFileSize={maxSize}
        emptyTemplate={
          <p style={{ fontWeight: '500' }} className="m-0">
            Drag and drop Photos to here to upload.
          </p>
        }
      />
    </>
  );
};

export default FileUploader;
