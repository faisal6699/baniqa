import React, { useState } from "react";

import img from "../../assets/images/page_img/11.jpg";
import Signupphone from "./Signupphone";
import Signupcreate from "./Signupcreate";
import "./signup.css";
import SignupformP from "./SignupformP";

const SignupPhoneForm = ({phoneForm,phone}) => {
  
  return (
    <section>
      {phone  ? (
        <div className="row" id="signup">
          <div className="col-md-6 signup-img"></div>

          <div className="col-md-6 signup-div-p">
            <SignupformP phoneForm={phoneForm} />
          </div>
        </div>
      ) : (
        <div className="row" id="signup">
          <div className="col-md-6 signup-img"></div>
          <div className="col-md-6 signup-div">
            <Signupphone phoneForm={phoneForm} />
          </div>
        </div>
      )}
    </section>
  );
};

export default SignupPhoneForm;
