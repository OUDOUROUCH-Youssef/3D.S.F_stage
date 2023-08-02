import React from 'react';
import'../App';
function Upload() {
  return (            
            <div className="upload_base">
              <label htmlFor="fileInput" className="file-upload-button">
                Upload File
              </label>
              <input type="file" id="fileInput" style={{ display:'block' }} />
            </div>
  );
  }
export default Upload;
