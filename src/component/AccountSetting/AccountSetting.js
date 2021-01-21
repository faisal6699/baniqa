import React from 'react';
import Headers from '../layout/Header/Headers';
import Footers from '../layout/Footer/Footers';
import { Link, useHistory } from 'react-router-dom';
import './AccountSetting.css';

const AccountSetting = (props) => {
    let history = useHistory();

    const onSubmitHandler = (e) => {
      console.log(e);
      history.push("/homes");
    }

    return (
        <section id="account-setting-section">
          {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}
          
          <Headers />

          <div className="title">
              <h2 className="text-center">Account Setting</h2>
          </div>
          
          <div className="account-setting-form">
            <form>
                <div className="form-group row">
                    <label for="inputName3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input readOnly type="text" className="form-control" id="inputName3" placeholder="Name" value="Rakibul Islam" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input readOnly type="email" className="form-control" id="inputEmail3" placeholder="Email" value="r@gmail.com" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input readOnly type="password" className="form-control" id="inputPassword3" placeholder="Password" value="123" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputAddress3" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                    <input readOnly type="text" className="form-control" id="inputAddress3" placeholder="Address" value="Dhaka" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputPayment3" className="col-sm-2 col-form-label">Payment Method</label>
                    <div className="col-sm-10">
                    <input readOnly type="text" className="form-control" id="inputPayment3" placeholder="Payment Method" value="Bkash" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="inputRating3" className="col-sm-2 col-form-label">My Rating</label>
                    <div className="col-sm-10">
                    <input readOnly type="text" className="form-control" id="inputRating3" placeholder="Payment Method" value="5***" />
                    </div>
                </div>
            </form>
          </div>

          <Footers />
        </section>
    );
}

export default AccountSetting;
