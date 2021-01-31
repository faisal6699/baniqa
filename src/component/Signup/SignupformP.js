import React from "react";
import ReactCodeInput from "react-verification-code-input";

const SignupformP = () => {
  return (
    <div>
      <h2 className="registration-header">GOT YOUR CODE</h2>
      <p className="registration-header-p">
        We've sent a 6-digit code to +8801670706699
      </p>
      <h5 className="registration-header-p">Enter the code</h5>
      <ReactCodeInput className="verification-input" type="number" />
    </div>
  );
};

export default SignupformP;
