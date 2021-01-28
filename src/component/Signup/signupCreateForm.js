import React, { useState } from "react";

import img from "../../assets/images/page_img/11.jpg";

import Signupcreate from "./Signupcreate";
import SignupformC from './SignupformC'
import "./signup.css";

const SignupCreateForm = () => {
    const [form, setForm] = useState(true)

  function onChaneToFormPage(){
      setForm(true)
  }
  return (
    <section>
      {!form ?<div className="row" id="signup">
        <div className="col-md-6 signup-img"></div>

        <div className="col-md-6 signup-div">
          <Signupcreate formPage = {onChaneToFormPage}/>
        </div>
      </div> : <div className="row" id="signup">
        <div className="col-md-6 signup-img"></div>

        <div className="col-md-6 signup-div">
          <SignupformC />
        </div>
      </div>}
    </section>
  );
};

export default SignupCreateForm;
