import React from 'react';
import { CgClose } from "react-icons/cg";

function Suggest(){
    return(
        <div id="suggest" class="form-2">
        
                <div id="col2">
                    <h2>Feel free to suggest your ideas</h2> <br/>
                    <a href='/3D.S.F_stage' class='close'><CgClose/></a>
                    <p>For any questions or information requests, please contact us using this form.</p>
                    <form  method="post" >
                        <div class="form-group">
                            <input type="text" class="form-control-input" placeholder="Full name" id="cname" name="cname" required />
                            <div class="help-block with-errors"></div>
                            <input type="email" class="form-control-input" placeholder='Email' id="cemail" name="cemail" required/>
                            <div class="help-block with-errors"></div>
                            <textarea class="form-control-textarea" id="cmessage" placeholder='Propose a Project' name="cmessage" required></textarea>
                            <div class="help-block with-errors"></div>
                            <button type="submit" class="form-control-submit-button" >SEND</button>
                        </div>
                        <div class="form-message">
                            <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                        </div>
                    </form>

                </div> 
         
       
              
    </div>
    );
}
export default Suggest;