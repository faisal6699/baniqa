import React from 'react';
import Headers from '../layout/Header/Headers';
import Footers from '../layout/Footer/Footers';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../../helpers/auth'
import './LogIn.css';

const LogIn = (props) => {
    // let history = useHistory();

    const onSubmitHandler = (e) => {
      Auth.adminCheck(true)
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
              <Link className="button sign" to='signup'>sign up</Link>
            </div>
          </section>

          <Footers />
        </section>
    );
}

export default LogIn;
