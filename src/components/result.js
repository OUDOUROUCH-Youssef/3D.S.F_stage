import '../App';
import { saveAs } from 'file-saver';
import {Model} from './upload.js';
import React,{ useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { CgClose } from "react-icons/cg";
import { CgPushDown } from "react-icons/cg";
import { Stage, PresentationControls } from '@react-three/drei';

function Result({ uploadedModel , handleSubmit}){
  const [downloadLink, setDownloadLink] = useState(null);
  const formData= new FormData();

  useEffect(() => {
    if (downloadLink) {
      saveAs(downloadLink, 'file.vtp');
    }
  }, [downloadLink]);

  const handleDownloadClick = () => {
    fetch('http://127.0.0.1:8000/upload/', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        setDownloadLink(url);
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  const handleUserAction = () => {
    handleSubmit();
  }


    
    return(
        <div id="resultat">
            <a href='/3D.S.F_stage/Upload' class='close'><CgClose/></a>
            <div id="original" className="canvas2">
                <h1> Original object </h1>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <color attach="background" args={['#ADD8E6']} />
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={'sunset'} >
                        {uploadedModel ? <Model url={uploadedModel} scale={0.01} /> : null}
                    </Stage>
                </PresentationControls>
                </Canvas>
            </div>
            <div className="buttons-container">
                <button className='r_button' onClick={handleUserAction}> Predict</button>
                <button className='r_button' onClick={handleDownloadClick} >Download <CgPushDown/></button>
            </div >
            <div id="changed" className="canvas2">
                <h1>Result object</h1>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <color attach="background" args={['#ADD8E6']} />
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={'sunset'} >
                     
                    </Stage>
                </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
}
export default Result