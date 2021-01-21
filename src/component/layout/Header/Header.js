import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../../../assets/images/logo1.png";
import "./Header.css";
import "./HeaderResponsive.css";
import $ from 'jquery'

const Header = (props) => {
    $(document).ready(function () {
        $(window).scroll(function(){  
            if ($(this).scrollTop() > 40) {
                $('.nav-sticky').addClass("fixed-top");
                $('.nav-sticky').css({"background-color":"#fff"});
            }else{
                $('.nav-sticky').removeClass("fixed-top");
            }   
        });
    });

  return (
    <section id="header-section">
      <header>
        <nav className="navbar navbar-expand-lg nav-sticky" id='navBar'>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/">
            <a
              className="navbar-brand collapse navbar-collapse"
              href=""
              id="navbarTogglerDemo03"
            >
              <img src={logo1} alt="logo" width="30" height="30" />
            </a>
          </Link>

          <form id="navBarSearchForm" className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item pr-3">
                <Link to="/login" >Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </section>
  );
};

export default Header;
