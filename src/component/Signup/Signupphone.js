import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Signupphone = ({ phoneForm }) => {
  return (
    <div className="p-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <ProgressBar animated now={10} />
        </div>
      </div>

      <h2 className="registration-header">SIGN UP</h2>
      <p className="registration-header-p" style={{ color: "gray" }}>
        To create your account, we need to verify your phone number. We will
        never display this number publicly
      </p>
      <h4 className="registration-header">Enter phone number</h4>
      {/* <button> Terms of Services</button>
          <button> Privacy Policy</button> */}
      <div style={{ display: "flex" }} className="registration-header">
        <select name="+44" id="cars" className='select-main'>
          <option value="+44">+44</option>
          <option value="+88">+88</option>
          <option value="+09">+09</option>
          <option value="+08">+08</option>
        </select>

        <input type="text" className='number-phone-input' placeholder='Phone Number'/>
      </div>
      <br />
      <input type="submit" value='Submit' className='submit-button ml-3 mr-3' onClick={() =>phoneForm('next')} />
    </div>
  );
};

export default Signupphone;
