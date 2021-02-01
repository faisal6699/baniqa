import React, { useState } from "react";

import img from "../../assets/images/page_img/11.jpg";

import Signupcreate from "./Signupcreate";
import SignupformC from "./SignupformC";
import Signupphone from "./Signupphone";
import SignupformP from "./SignupformP";
import "./signup.css";

const SignupCreateForm = ({ form, formPage }) => {
  return (
    <section>
      {!form ? (
        <div className="row" id="signup">
          <div className="col-md-6 signup-img"></div>

          <div className="col-md-6 signup-div">
            <Signupcreate formPage={formPage} />
          </div>
        </div>
      ) : (
        <div className="row" id="signup">
          <div className="col-md-6 signup-img"></div>

          <div className="col-md-6 signup-div">
            <SignupformC formPage={formPage} />
          </div>
        </div>
      )}
    </section>
  );
};

export default SignupCreateForm;
