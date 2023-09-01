
import '../App';
import axios from 'axios';
import Result from './result.js';
import React, { useState, useEffect } from 'react';
import { CgClose } from "react-icons/cg";
import { useLoader } from 'react-three-fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function Model({ url, ...props }) {
  const obj = useLoader(OBJLoader, url);
  return <primitive object={obj} {...props} />;
}

function Upload() {
  const [file, setFile] = useState(null);
  const [uploadedModel, setUploadedModel] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = async () => {

    const formData = new FormData();
    formData.append('file', file, file.name); // Include the file name

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Response data:', response.data);
    } catch (error) {
      if (error.response) {
        console.log('Server responded with:', error.response.status);
        console.log('Response data:', error.response.data);
      } else if (error.request) {
        console.log('Request was made but no response was received:', error.request);
      } else {
        console.log('Error setting up the request:', error.message);
      }

      alert('Error uploading file');
    }
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setUploadedModel(url);
      setShowResult(true);
      
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const selectedFile =e.dataTransfer.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setUploadedModel(url);
      setShowResult(true);
    }
  };

  useEffect(() => {
    const dropContainer = document.getElementById("dropcontainer");
    dropContainer.addEventListener("dragover", handleDragOver, false);
    dropContainer.addEventListener("dragenter", handleDragEnter);
    dropContainer.addEventListener("dragleave", handleDragLeave);
    dropContainer.addEventListener("drop", handleDrop);

    // Clean up event listeners when the component unmounts
    return () => {
      dropContainer.removeEventListener("dragover", handleDragOver, false);
      dropContainer.removeEventListener("dragenter", handleDragEnter);
      dropContainer.removeEventListener("dragleave", handleDragLeave);
      dropContainer.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div>
      {showResult ? (
        <Result uploadedModel={uploadedModel} handleSubmit={handleSubmit} />
      ) : (
        <div className="upload_base">
          <label
            htmlFor="images"
            className={`drop-container ${dragActive ? "drag-active" : ""}`}
            id="dropcontainer"
          >
            <span className="drop-title">Drop files here</span> or
            <input
              type="file"
              id="images"
              accept=".obj"
              onChange={handleFileUpload}
            />
            
          </label>
          
          <a href='/3D.S.F_stage' className='close'><CgClose/></a>
        </div>
      )}
    </div>
  );
}

export { Model, Upload };