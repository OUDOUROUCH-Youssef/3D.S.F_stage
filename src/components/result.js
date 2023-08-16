import '../App';
import { saveAs } from 'file-saver';
import {Model} from './upload.js';
import React,{ useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CgClose } from "react-icons/cg";
import { STLLoader } from 'three-stl-loader';
import { CgPushDown } from "react-icons/cg";
import { Stage, PresentationControls } from '@react-three/drei';

function Result({ uploadedModel }){
    //download functions
  const [stlData, setStlData] = useState(null);
  const handleDownloadSTL = () => {
    if (stlData) {
      const blob = new Blob([stlData], { type: 'application/octet-stream' });
      saveAs(blob, 'model.stl');
    }
  };

  const handleLoadSTL = (object) => {
    const stlLoader = new STLLoader();
    const geometry = object.children[0].geometry; 
    const stlText = stlLoader.parse(geometry);

    setStlData(stlText);
  };
      //fin
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
                <button className='r_button'> Display</button>
                <button className='r_button'>  Predict </button>
                <button className='r_button' onClick={handleDownloadSTL}>Download <CgPushDown/></button>
            </div >
            <div id="changed" className="canvas2">
                <h1>Result object</h1>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <color attach="background" args={['#ADD8E6']} />
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={'sunset'} onCreated={handleLoadSTL}>
                        
                    </Stage>
                </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
}
export default Result