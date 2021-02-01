import React from "react";
import ReactCodeInput from "react-verification-code-input";
import ProgressBar from "react-bootstrap/ProgressBar";

const SignupformP = ({ phoneForm }) => {
  return (
    <div className='p-5'>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <ProgressBar animated now={30} />
        </div>
      </div>
      <h2 className="registration-header">GOT YOUR CODE</h2>
      <p className="registration-header-p">
        We've sent a 6-digit code to +8801670706699
      </p>
      <h5 className="registration-header-p">Enter the code</h5>

      <ReactCodeInput className="verification-input" type="number" />

      <input
        type="submit"
        className="submit-button-number"
        onClick={() => phoneForm("completed")}
      />
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p style={{}}>Haven't receive the code</p>
      <button href='#' className='button-default-colorless'>Check Your Number</button>
      </div>
    </div>
  );
};

export default SignupformP;
