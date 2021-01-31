import React, { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { IoArrowBack } from "react-icons/io5";
import "./signup.css";
import { BsChevronDown } from "react-icons/bs";
import $ from "jquery";
import * as Auth from '../../helpers/auth'

const SignupformC = () => {
  const [type, passType] = useState("password");
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState("Location");

  // eslint-disable-next-line no-unused-vars

  function setPassType() {
    setToggle(!toggle);
  }

  function handleSignup(){
    console.log('abc')
    Auth.adminCheck(true)
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
          <label for="floatField-password">password</label>
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

      <h3 className="registration-header">Your location</h3>
      <div className="margin-up-down padding-div">
        <div id="floatContainer" className="float-container w-100">
          <div className="btn-group w-100">
            <label for="floatField">location</label>
            <button
              id="floatField"
              type="button"
              className="btn drop-field-btn  dropdown-toggle"
              data-toggle="dropdown"
              data-display="static"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span style={{ float: "left" }}>Location</span>
              <span className="loc-icon" style={{ float: "right" }}>
                <BsChevronDown />
              </span>
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="margin-up-down padding-div">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ paddingRight: "10px" }}>
            <input type="checkbox" />
          </div>
          <div>
            Get emails from Baniqa, including special promotions and selling
            tips.
          </div>
        </div>
        <div className="row"></div>
      </div>
      <div className="margin-up-down padding-div">
        <input type="submit" value="Next" className="submit-button" onClick={handleSignup}/>
      </div>
    </div>
  );
};

export default SignupformC;
