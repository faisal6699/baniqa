import React from 'react';
import Headers from '../layout/Header/Headers';
import Footers from '../layout/Footer/Footers';
import './OrderHistory.css';

const OrderHistory = (props) => {
    return (
        <section id="order-history-section">
          {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}
          
          <Headers />

          <div className="title">
              <h2 className="text-center">Order History</h2>
          </div>
          
          <div className="order-history-table">
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Order Id</th>
                            <th scope="col">Customer Info</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>AB8453jhg</td>
                            <td>Rakibul Islam</td>
                            <td>Progress</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>AB8453jhg</td>
                            <td>Rakibul Islam</td>
                            <td>Deliver</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>AB8453jhg</td>
                            <td>Rakibul Islam</td>
                            <td>Order Request</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>

          <Footers />
        </section>
    );
}

export default OrderHistory;
