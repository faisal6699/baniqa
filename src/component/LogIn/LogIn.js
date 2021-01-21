import React from 'react';
import Headers from '../layout/Header/Headers';
import Footers from '../layout/Footer/Footers';
import { Link, useHistory } from 'react-router-dom';
import './LogIn.css';

const LogIn = (props) => {
    let history = useHistory();

    const onSubmitHandler = (e) => {
      console.log(e);
      history.push("/homes");
    }

    return (
        <section id="login-section">
          {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}
          
          <Headers />
          
          <section className="login-form">
            <div className="form-info">
              <h2>Login to continue</h2>
              <input className="form-input" type="text" name="User name" placeholder="User name or Email Address*" />
              <input className="form-input" type="password" placeholder="Password*" />
              <a className="forgot" href="#">forgot password?</a>
              <a className="button log" href="#" onClick={(e) => onSubmitHandler(e)} >login</a>
              <a className="button fb" href="#"> facebook</a>
              <span className="line">or</span>
              <a className="button sign" href="#">sing up</a>
            </div>
          </section>

          <Footers />
        </section>
    );
}

export default LogIn;
