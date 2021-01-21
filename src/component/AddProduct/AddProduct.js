import React, {useState} from "react";
import Headers from "../layout/Header/Headers";
import Footers from "../layout/Footer/Footers";
import owner2 from "../../assets/images/owner2.jpg";
import add from "../../assets/images/add.png";
import MultiImageInput from 'react-multiple-image-input';

import "./AddProduct.css";

const AddProduct = (props) => {
  const [images, setImages] = useState({});

  const crop = {
    unit: '%',
    aspect: 4 / 3,
    width: '100'
  }
  return (
    <section id="add-product-section">
      <Headers />

      {/* <section className="search">
            <div className="container">
              <div className="search-box py-4">
                <input className="form-control" type="text" placeholder="SEARCH...." />
              </div>
            </div>
          </section> */}

      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={owner2} alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-info">
                <h2>6YardVintage:</h2>
                <p>HI, I'm Jhon. I make and sell handmade silver jewelry.</p>
                <em>6-8 days delivery</em>
                <div style={{ display: "flex" }}>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked final"></span>
                  <p>(3)</p>
                </div>
                <span>Cash On Delivery and BKash Avaliable</span>
                <a className="btn flw" href="#">
                  <i className="fa fa-plus" aria-hidden="true"></i> Follow
                </a>
                <a className="btn msg" href="#">
                  Message
                </a>
              </div>
              {/* <a className="fav-icon" href="#">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </a> */}

              <a
                data-toggle="modal"
                data-target="#exampleModalCenter"
                style={{
                  display: "flex",
                  paddingTop: "10px",
                  cursor: "pointer",
                }}
                
              >
                <img
                  src={add}
                  style={{
                    width: "20px",
                    height: "20px",
                    marginTop: "10px",
                    marginRight: "10px",
                  }}
                  alt='add_img'
                />
                <h2> add your first lisiting</h2>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="add-item"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <a href="#">
          <div className="items"></div>
        </a>
        <h2>add your first lisiting</h2>
        <div className="add-card-form"></div>
      </section> */}

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Bio
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Size
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                   Upload Image 
                  </label>
                  <MultiImageInput 
                    images = {images}
                    setImages= {setImages}
                    cropConfig = {{ crop,  ruleOfThirds: true}}
                    theme = "light"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Bkash or COD Only
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="close-btn" data-dismiss="modal">
                Close
              </button>
              <button type="button" className="save-btn">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footers />
    </section>
  );
};

export default AddProduct;
