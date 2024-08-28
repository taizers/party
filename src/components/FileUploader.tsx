import { FC } from 'react';
import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';

interface FileUploaderProps {
  path?: string;
  maxSize?: number;
  setFile: (file: File) => void;
}

const FileUploader: FC<FileUploaderProps> = ({
  path = '/photo',
  maxSize = 100000,
  setFile,
}) => {
  const onFileSelect = (e: FileUploadSelectEvent) => {
    setFile(e.files[0]);
  };

  return (
    <FileUpload
      style={{ margin: '10px 0' }}
      customUpload
      id="file-uploader"
      onSelect={onFileSelect}
      chooseLabel="Choose Photo"
      name="fileUpload"
      url={path}
      mode="basic"
      accept="image/*"
      maxFileSize={maxSize}
    />
  );
};

export default FileUploader;
