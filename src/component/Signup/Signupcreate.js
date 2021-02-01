import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { IoArrowBack } from "react-icons/io5";
import "./signup.css";
import { BsChevronDown } from "react-icons/bs";

const Signupcreate = ({ formPage }) => {
  return (
    <div>
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

      < br />
      <h2 className="registration-header">BANIQA TERMS</h2>
      <p className="registration-header-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et posuere
        felis. In laoreet sodales nunc, semper ultrices orci maximus eget. Fusce
        a est pharetra, sollicitudin neque eget, scelerisque ante. Integer
        fermentum, enim ac posuere tincidunt, ex mauris porta nisi, et sodales
        risus ligula eget risus. Sed in diam suscipit, iaculis magna sit amet,
        dictum tellus. Proin leo orci, fringilla sed urna nec, viverra suscipit
        risus. Pellentesque et elementum elit. Donec at elementum risus. Integer
        eros eros, aliquet ut lectus sit amet, pellentesque tristique metus.
      </p>
      <br />
      <p className="registration-header-p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et posuere
        felis. In laoreet sodales nunc, semper ultrices orci maximus eget. Fusce
        a est pharetra, sollicitudin neque eget, scelerisque ante. Integer
        fermentum, enim ac posuere tincidunt, ex mauris porta nisi, et sodales
        risus ligula eget risus. Sed in diam suscipit, iaculis magna sit amet,
        dictum tellus. Proin leo orci, fringilla sed urna nec, viverra suscipit
        risus.
      </p>
      <div className="d-flex mt-3 mb-3">
        <button className="button-default-colorless">Terms of Services</button>
        <button className="button-default-colorless">Privacy Policy</button>
      </div>
      <input
        className="submit-button"
        type="submit"
        value="create an account"
        onClick={() => formPage('next')}
      />
      <span className="grey-condition">
        By continuing you accept Baniqa's Terms & Conditions
      </span>
    </div>
  );
};

export default Signupcreate;
