import '../App';
import { saveAs } from 'file-saver';
import {Model} from './upload.js';
import { OBJLoader } from 'three-obj-loader';
import React,{ useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CgClose } from "react-icons/cg";
import { CgPushDown } from "react-icons/cg";
import { Stage, PresentationControls } from '@react-three/drei';

function Result({ uploadedModel , handleSubmit}){
  const [objData, setObjData] = useState(null);

  const handleUserAction = () => {
    handleSubmit();
  }

      const handleDownloadOBJ = () => {
        if (uploadedModel) {
          const blob = new Blob([uploadedModel], { type: 'text/plain' });
          saveAs(blob, 'model.obj');
        }
      };

      const handleLoadOBJ = async (object) => {
        const objLoader = new OBJLoader();
        const geometry = object.children[0].geometry;
      
        try {
          const objModel = await objLoader.parseAsync(geometry);
          setObjData(objModel);
        } catch (error) {
          console.error('Error loading OBJ:', error);
        }
      };
      
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
                <button className='r_button' onClick={handleUserAction}> Display</button>
                <button className='r_button'>  Predict </button>
                <button className='r_button' onClick={handleDownloadOBJ}>Download <CgPushDown/></button>
            </div >
            <div id="changed" className="canvas2">
                <h1>Result object</h1>
                <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <color attach="background" args={['#ADD8E6']} />
                <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
                    <Stage environment={'sunset'} onCreated={handleLoadOBJ}>
                     
                    </Stage>
                </PresentationControls>
                </Canvas>
            </div>
        </div>
    );
}
export default Result