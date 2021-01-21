import React from "react";
import { Link } from "react-router-dom";
import Post from "../../Post/Post";
import logo1 from "../../../assets/images/logo1.png";
import profilesLogo from "../../../assets/images/profiles-logo.jpg";
import "./Headers.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import email from '../../../assets/images/email.png'
import cart from '../../../assets/images/cart.png'
import $ from "jquery";

const Headers = (props) => {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $(".nav-sticky").addClass("fixed-top");
        $(".nav-sticky").css({
          "background-color": "#fff",
          "border-bottom": "2px solid rgb(238, 238, 238)",
        });
      } else {
        $(".nav-sticky").removeClass("fixed-top");
      }
    });
  });

  return (
    <section id="headers-section">
      <header>
        <div className="nav-top bg-dark d-flex justify-content-between">
          <div className="nav-top-left pl-3">
            <span>
              <a href="#" className="text-light pt-5">
                Hot Line: 003453465373
              </a>
            </span>
          </div>

          <div className="nav-top-right pr-3">
            <span>
              <a href="#" className="text-light pr-1">
                ENG
              </a>
            </span>
            <span className="text-light">
              {" "}
              |{" "}
              <a href="#" className="text-light">
                BEN
              </a>
            </span>
          </div>
        </div>

        {/* <Navbar bg="light">
          <Navbar.Brand href="/homes">
            {" "}
            <img src={logo1} alt="logo" width="30" height="30" />
          </Navbar.Brand>
            <div>
              <input  type='text' placeholder='what are you looking for today... ' className=''/>
            </div>
          
        </Navbar> */}
        <nav className="navbar navbar-expand-lg navbar-light nav-sticky">
          <button
            className="navbar-toggler mr-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{float: "right"}}
          >
            <span className="navbar-toggler-icon" >
            
            </span>
          </button>

          <Link to="/homes" className='navbar-brand'>
            <img src={logo1} alt="logo" width="30" height="30" className='brand-image' />
          </Link>
          <div className="main" >
            <div className="form-group has-search">
              <span className="fa fa-search  form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="What you are looking for today..."
              />
            </div>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
              <li className="nav-item mr-3">
                <span>
                  <Link to='/cart'>
                   <img src={cart} style={{marginTop: '4px'}} />
                  </Link>
                  <p className="cart-icon-text"></p>
                </span>
              </li>

              <li className="nav-item mr-3">
                <span>
                  <Link to='/messages'>
                    <img src={email} style={{marginTop: '4px'}}/>
                  </Link>
                </span>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={profilesLogo}
                    className="rounded-circle"
                    alt="logo"
                  />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/page">
                    Rakibul
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/page">
                    My Profile
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/add-product">
                    Add Selling Product
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="order-history">
                    Order History
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="payment-history">
                    Payment History
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="account-setting">
                    Account Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Headers;
