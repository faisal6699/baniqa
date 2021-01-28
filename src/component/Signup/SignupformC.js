import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const SignupformC = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">back</div>
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <ProgressBar animated now={10} />
        </div>
      </div>
      <h2>Get Ready</h2>
      <p>Enter a few details to enter the Baniqa community</p>
      <h3>Your details</h3>
      <div className="row">
        <div className="col-md-6">
          <div id="floatContainer" class="float-container">
            <label for="floatField">First Name</label>
            <input id="floatField" type="text" />
          </div>
        </div>
        <div className="col-md-6">
          <div id="floatContainer" class="float-container">
            <label for="floatField">Last Name</label>
            <input id="floatField" type="text" />
          </div>
        </div>

        <div className="col-md-12">
          <div id="floatContainer" class="float-container">
            <label for="floatField">Email</label>
            <input id="floatField" type="text" />
          </div>
        </div>
      </div>

      <h3>Create your username and password</h3>
      <div id="floatContainer" class="float-container">
        <label for="floatField">username</label>
        <input id="floatField" type="text" />
      </div>

      <div id="floatContainer" class="float-container">
        <label for="floatField">password</label>
        <input id="floatField" type="text" />
      </div>

      <h3>Your location</h3>
      <div id="floatContainer" class="float-container">
        <label for="floatField">username</label>
        <hr />
        <select name="language">
          <option value="en">English</option>
          <option value="bng">Bangla</option>
          <option value="frnch">France</option>
          <option value="german">Germany</option>
        </select>
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
