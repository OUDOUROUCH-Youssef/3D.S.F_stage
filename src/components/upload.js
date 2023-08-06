import '../App';
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model({ url, ...props }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} {...props} />;
}

function Upload() {
  const [uploadedModel, setUploadedModel] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedModel(url);
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
    const file = e.dataTransfer.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedModel(url);
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
    <div className="upload_base">
      <label htmlFor="images" className={`drop-container ${dragActive ? "drag-active" : ""}`} id="dropcontainer">
        <span className="drop-title">Drop files here</span> or
        <input
          type="file"
          id="images"
          accept=".gltf, .glb, .obj, .fbx"
          onChange={handleFileUpload}
        />
      </label>

      <div className="canvas-container">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
          <color attach="background" args={['#ADD8E6']} />
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={'sunset'}>
              {uploadedModel ? <Model url={uploadedModel} scale={0.01} /> : null}
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </div>
  );
}

export default Upload;
