import React, { useState } from "react";

import img from "../../assets/images/page_img/11.jpg";
import Signupphone from "./Signupphone";
import Signupcreate from "./Signupcreate";
import "./signup.css";
import SignupformP from "./SignupformP";

const SignupPhoneForm = () => {
  const [phone, setPhone] = useState(true);

  function onChaneToPhonePage() {
    setPhone(true);
  }
  return (
    <section>
      <div className="row" id="signup">
        <div className="col-md-6 signup-img"></div>
        {phone ? (
          <div className="col-md-6 signup-div-p">
            <SignupformP phoneForm={onChaneToPhonePage} />
          </div>
        ) : (
          <div className="col-md-6 signup-div-p">
            <Signupphone phoneForm={onChaneToPhonePage} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SignupPhoneForm;
