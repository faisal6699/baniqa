import React from 'react';
import Headers from '../layout/Header/Headers';
import Footers from '../layout/Footer/Footers';
import './PaymentHistory.css';

const PaymentHistory = (props) => {
    return (
        <section id="payment-history-section">
          {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}
          
          <Headers />

          <div className="title">
              <h2 className="text-center">Payment History</h2>
          </div>
          
          <div className="payment-history-table">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Invoice Number</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>12.08.2020</td>
                            <td>AB8453jhg</td>
                            <td>10000</td>
                            <td>Active</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>12.08.2020</td>
                            <td>AB8453jhg</td>
                            <td>10000</td>
                            <td>Inactive</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>12.08.2020</td>
                            <td>AB8453jhg</td>
                            <td>10000</td>
                            <td>Active</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          <Footers />
        </section>
    );
}

export default PaymentHistory;
