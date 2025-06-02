import { FC, useState, useEffect } from 'react';
import { FileUpload, FileUploadSelectEvent } from 'primereact/fileupload';

interface FileUploaderProps {
  path?: string;
  maxSize?: number;
  setFile: (file: File | null) => void;
}

const FileUploader: FC<FileUploaderProps> = ({
                                               path = '/photo',
                                               maxSize = 5000000, // 5MB
                                               setFile,
                                             }) => {
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onFileSelect = (e: FileUploadSelectEvent) => {
    if (e.files && e.files.length > 0) {
      const file = e.files[0];
      setFile(file);
      setSelectedFileName(file.name);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      console.log('Selected file:', file.name);
    } else {
      setFile(null);
      setSelectedFileName(null);
      setPreviewUrl(null);
      console.log('No file selected');
    }
  };

  // Cleanup preview URL on unmount or file change
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div style={{ margin: '10px 0' }}>
      <FileUpload
        customUpload
        id="file-uploader"
        onSelect={onFileSelect}
        chooseLabel="Choose Photo"
        name="fileUpload"
        url={path}
        mode="basic"
        accept="image/*"
        maxFileSize={maxSize}
        invalidFileSizeMessageSummary="File too large"
        invalidFileSizeMessageDetail="Maximum file size is 5MB."
      />
      {selectedFileName && (
        <div style={{ marginTop: '10px', color: 'var(--primary-50)' }}>
          Selected: {selectedFileName}
        </div>
      )}
      {previewUrl && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={previewUrl}
            alt="Preview"
            style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'contain' }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUploader;