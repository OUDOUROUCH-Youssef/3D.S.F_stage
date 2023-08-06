
import'../App';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model({ url, ...props }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} {...props} />;
}

function Upload() {
  const [uploadedModel, setUploadedModel] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedModel(url);
    }
  };

  return ( 
    <div className="upload_base">
      <label htmlFor="fileInput" className="file-upload-button">
                Upload File
      </label>
      <input type="file" accept=".gltf, .glb, .obj, .fbx" onChange={handleFileUpload} />
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'absolute', width: '50%', height: '82%' }}>
        <color attach="background" args={['#ADD8E6']} />
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Stage environment={'sunset'}>
            {uploadedModel ? <Model url={uploadedModel} scale={0.01} /> : null}
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
  
export default Upload;
