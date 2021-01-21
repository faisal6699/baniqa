import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return (
        <section id="footer-section" className="pt-5">
            <div class="footer-top">
                <div class="footer-top-header">
                    <h3 className="text-center pt-5 pb-5">Be part of the community that's transforming fashion one item at a time.</h3>
                </div>
            </div>
            
            <div class="footer-bottom">
                <div className="row">
                    <div className="col-md-12">
                        <footer className="login-footer">
                            <div className='container-fluid'>
                              <div className="row">
                                <div className="col-md-7 col-sm-6">
                                  <div className="nav-item">
                                    <ul className="nav">
                                      <li className="nav-items">
                                        <a className="nav-links" href="#">Home</a>
                                      </li>
                                      <li className="nav-items">
                                        <a className="nav-links" href="#">About</a>
                                      </li>
                                      <li className="nav-items">
                                        <a className="nav-links" href="#">Contact</a>
                                      </li>
                                      <li className="nav-items">
                                        <a className="nav-links" href="#">Service</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5 col-sm-6">
                                  <div className="nav-item d-flex justify-content-end">
                                    <ul className="nav">
                                      <li className="nav-items">
                                        <a className="nav-links" href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                                      </li>
                                      <li className="nav-items">
                                        <a className="nav-links" href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                      </li>
                                      <li className="nav-items">
                                        <a className="nav-links" href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                                      </li>
                                      <select name="language">
                                        <option value="en" >English</option>
                                        <option value="bng" >Bangla</option>
                                        <option value="frnch" >France</option>
                                        <option value="german" >Germany</option>
                                      </select>
                                      <select name="country">
                                        <option value="en" >Bangladesh</option>
                                        <option value="bng" >UK</option>
                                        <option value="frnch" >USA</option>
                                        <option value="german" >Germany</option>
                                        <option value="italy" >Italy</option>
                                      </select>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
