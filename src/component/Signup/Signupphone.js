import React from 'react'
import ProgressBar from "react-bootstrap/ProgressBar";

const Signupphone = ({ phoneForm}) =>{

    return(
     <div>
        <ProgressBar animated now={10} />
         <h2>SIGN UP</h2>
          <p>
            To create your account, we need to verify your phone number. We will
            never display this number publicly
          </p>
          <h4>Enter phone number</h4>
          <input type="text" />
          {/* <button> Terms of Services</button>
          <button> Privacy Policy</button> */}
          <input type="submit" onClick={() => phoneForm(true)}/>
     </div>   
    )
}

export default Signupphone