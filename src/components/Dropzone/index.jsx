import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Dropzone.module.css";

const Dropzone = ({ handleDrop }) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".zip",
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {!files.length ? (
        <p className={styles.DropzonePlaceholder}>
          Drag and drop your zipped folder or click here to select files
        </p>
      ) : (
        <>
          {files.map((file) => (
            <p className={styles.DropzonePlaceholder}>{file.name}</p>
          ))}
        </>
      )}
    </div>
  );
};

export default Dropzone;
