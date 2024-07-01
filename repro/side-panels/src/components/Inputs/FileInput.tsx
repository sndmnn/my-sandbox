import React from 'react';
import { UploadIcon } from '../../icons';
import { useDropzone } from 'react-dropzone';
import {
  FileInputErrorWrapper,
  FileInputContainer,
  Input,
} from './FileInput.styles';

interface ComponentProps {
  onFiles: (files: File[]) => void;
  multiple?: boolean;
  error?: Error;
}

export default function FileInput({
  onFiles,
  multiple,
  error,
}: ComponentProps) {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop: onFiles,
    onError: (error) => setErrorMessage(error.message),
    multiple,
  });
  const [errorMessage, setErrorMessage] = React.useState<string>('');
  const inputId = React.useId();

  React.useEffect(() => {
    if (error?.message) setErrorMessage(error.message);
  }, [error]);

  React.useEffect(() => {
    setErrorMessage('');
  }, [acceptedFiles]);

  return (
    <FileInputErrorWrapper>
      <FileInputContainer {...getRootProps()} error={!!errorMessage}>
        <UploadIcon className="upload-icon" />
        <Input>
          <label htmlFor={inputId}>
            Drag and drop or{' '}
            <span className="select-file-text">
              Select {multiple ? 'files' : 'a file'}
            </span>
            <input
              className="file-input"
              id={inputId}
              type="file"
              {...getInputProps()}
            />
          </label>
        </Input>
        {acceptedFiles.length > 0 && (
          <div className="accepted-files">
            {acceptedFiles.map((file) => (
              <div key={file.name}>{file.name}</div>
            ))}
          </div>
        )}
      </FileInputContainer>
      {errorMessage && <span className="error">{errorMessage}</span>}
    </FileInputErrorWrapper>
  );
}
