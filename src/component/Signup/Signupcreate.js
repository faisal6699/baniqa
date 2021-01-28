import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Signupcreate = ({formPage}) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">back</div>
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <ProgressBar animated now={10} />
        </div>
      </div>
      <h2>BANIQA TERMS</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et posuere
        felis. In laoreet sodales nunc, semper ultrices orci maximus eget. Fusce
        a est pharetra, sollicitudin neque eget, scelerisque ante. Integer
        fermentum, enim ac posuere tincidunt, ex mauris porta nisi, et sodales
        risus ligula eget risus. Sed in diam suscipit, iaculis magna sit amet,
        dictum tellus. Proin leo orci, fringilla sed urna nec, viverra suscipit
        risus. Pellentesque et elementum elit. Donec at elementum risus. Integer
        eros eros, aliquet ut lectus sit amet, pellentesque tristique metus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et posuere
        felis. In laoreet sodales nunc, semper ultrices orci maximus eget. Fusce
        a est pharetra, sollicitudin neque eget, scelerisque ante. Integer
        fermentum, enim ac posuere tincidunt, ex mauris porta nisi, et sodales
        risus ligula eget risus. Sed in diam suscipit, iaculis magna sit amet,
        dictum tellus. Proin leo orci, fringilla sed urna nec, viverra suscipit
        risus.
      </p>

      <button>Terms of Services</button>
      <button>Privacy Policy</button>
      <input type="submit" value='create an account' onClick={() => formPage(true)}/>
      <span>By continuing you accept Baniqa's Terms & Conditions</span>
    </div>
  );
};

export default Signupcreate
