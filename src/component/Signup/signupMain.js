import React, {useState} from "react";

import SignupCreateForm from "./signupCreateForm";
import SignupPhoneForm from "./signupPhoneForm";

const SignUpMain = () => {
  const [form, setForm] = useState(false);
  const [phone, setPhone] = useState(false);
  const [main, setMain] = useState(true);

  const  onChaneToFormPage =(type) => {
     
    if (type === "completed") {
        setMain(false);
      } else if (type === "next") {
        setForm(true);
      }
  }

  const  onChaneToPhonePage = (type) => {
    console.log(type);
    if (type === "completed") {
      setMain(false);
    } else if (type === "next") {
      setPhone(true);
    }
  };


  return (
    <div>
      {main ? (
        <SignupPhoneForm phone={phone} phoneForm={onChaneToPhonePage} />
      ) : (
        <SignupCreateForm form = {form} formPage={ onChaneToFormPage}/>
      )}
    </div>
  );
};

export default  SignUpMain;
