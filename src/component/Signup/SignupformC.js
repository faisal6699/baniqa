import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { IoArrowBack } from "react-icons/io5";
import "./signup.css";
import { BsChevronDown} from 'react-icons/bs'
import $ from "jquery";

const SignupformC = () => {
  const [type, passType] = useState("password");
  const [toggle, setToggle] = useState(false);

  // eslint-disable-next-line no-unused-vars

  function setPassType() {
    setToggle(!toggle);
  }

  return (
    <div className="registration-main">
      <div className="row">
        <div className="col-md-3">
          <div className="back-button">
            <IoArrowBack size="2em" />
            <h5>Back</h5>
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <ProgressBar animated now={10} />
        </div>
      </div>
      <h2 className="registration-header">Get Ready</h2>
      <p className="registration-header-p">
        Enter a few details to enter the Baniqa community
      </p>

      <h3 className="registration-header">Your details</h3>
      <div className="row">
        <div className="col-md-6 margin-up-down">
          <div id="floatContainer" className="float-container">
            <label for="floatField">First Name</label>
            <input id="floatField" type="text" />
          </div>
        </div>
        <div className="col-md-6 margin-up-down">
          <div id="floatContainer" class="float-container">
            <label for="floatField">Last Name</label>
            <input id="floatField" type="text" />
          </div>
        </div>
      </div>

      <div className="margin-up-down padding-div">
        <div id="floatContainer" className="float-container-email">
          <label for="floatField">Email</label>
          <input id="floatField" type="text" />
        </div>
      </div>

      <h3 className="registration-header">Create your username and password</h3>
      <div className="margin-up-down padding-div">
        <div id="floatContainer" class="float-container">
          <label for="floatField">username</label>
          <input id="floatField" type="text" />
        </div>
      </div>

      <div className="margin-up-down padding-div">
        <div id="floatContainer" class="float-container">
          <label for="floatField-password">username</label>
          {toggle ? (
            <input id="floatField-password" type="password" />
          ) : (
            <input id="floatField-password" type="text" />
          )}

          <span
            onClick={setPassType}
            toggle="#floatField-password"
            className="fa fa-fw fa-eye field-icon toggle-password"
          ></span>
        </div>
      </div>

      <h3>Your location</h3>
      <div id="floatContainer" className="float-container">
        <div className=''>
        <label for="floatField">username</label>
        <div className='dropdown-location' id='floatField'>
          <span className=''>abcd</span>
          <BsChevronDown />
        </div>
        <div className="">
            <span className="" data-value="tesla">Tesla</span>
            <span className="" data-value="volvo">Volvo</span>
            <span className="" data-value="mercedes">Mercedes</span>
        </div>
        </div>
        
          
      </div>

      <div className="row">
        <input type="checkbox" />
        <p>
          Get emails from Baniqa, including special promotions and selling tips.
        </p>
      </div>

      <input type="submit" value="Next" />
    </div>
  );
};

export default SignupformC;
