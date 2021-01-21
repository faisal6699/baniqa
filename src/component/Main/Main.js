import React from "react";
import banner from "../../assets/images/banner.jpg";
import rectangle from "../../assets/images/rectangle.png";
import img10 from "../../assets/images/page_img/10.jpg";
import img11 from "../../assets/images/page_img/11.jpg";
import img12 from "../../assets/images/page_img/12.jpg";
import img13 from "../../assets/images/page_img/13.jpg";
import {FaChevronCircleRight, FaChevronCircleLeft} from 'react-icons/fa'
import Slider from 'react-slick'
import "./Main.css";

const Main = (props) => {

    
  return (
    <>
      <section id="carousel-section" >
        <div
          id="slider"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#slider"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#slider" data-slide-to="1"></li>
            <li data-target="#slider" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="2000">
              <img
                src={banner}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block" >
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div> */}
            </div>
            <div className="carousel-item"  data-interval="2000">
              <img
                src={banner}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block" style={{color: 'blue', background: 'black'}}>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div> */}
            </div>
            <div className="carousel-item"  data-interval="2000">
              <img
                src={banner}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div> */}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#slider"
            role="button"
            data-slide="prev"
          >
           {/* <i class="fas fa-chevron-circle-left"></i> */}
            <span
              className=""
              aria-hidden="true"
            >
                < FaChevronCircleLeft size= '30px'  style={{ color: 'blue'}} />
            </span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#slider"
            role="button"
            data-slide="next"
          >
          {/* <i class="fas fa-chevron-circle-right"></i> */}
            <span
              className=""
              aria-hidden="true"
            >
                <FaChevronCircleRight size= '30px'  style={{ color: 'blue'}}/>
            </span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <div className="container">
        <div className="what-is-depop-section">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="banner-bottom-right">
                <div className="banner-bottom-right-header pt-3 pb-4">
                  <h2>What is Baniqa</h2>
                </div>
                <div className="banner-bottom-right-description pb-3">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.
                  </p>
                </div>
                <button type="button" class="btn btn-dark">
                  Get Strated
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="banner-bottom-left">
                <img
                  className="wow slideInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="5s"
                  style={{ boxShadow: "10px 10px 8px #cccccc" }}
                  src={img10}
                  className="img-fluid mt-3 mb-2"
                  alt=""
                  width="100%"
                  height="700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="find-your-style-section">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-bottom-left">
                <img
                  src={img11}
                  className="rounded img-fluid mt-3 mb-2"
                  style={{ boxShadow: "10px 10px 8px #cccccc" }}
                  alt=""
                  width="100%"
                  height="700"
                />
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-center">
              <div className="banner-bottom-right">
                <div className="banner-bottom-right-header pt-3 pb-4">
                  <h2>Find your style</h2>
                </div>
                <div className="banner-bottom-right-description pb-3">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.
                  </p>
                </div>
                <button type="button" class="btn btn-dark">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="things-we-love-section">
          <div className="things-we-love-header-section">
            <div className="row">
              <div className="col-md-12">
                <h2 className="pt-5 pb-5">Things we love</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="img-group pb-3 d-flex justify-content-between">
                <div className="single-img pr-2">
                  <img
                    src={img13}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img13}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img13}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img13}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img13}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img">
                  <img
                    src={img13}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="img-group pb-5 d-flex justify-content-between">
                <div className="single-img pr-2">
                  <img
                    src={img11}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img11}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img11}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img11}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img pr-2">
                  <img
                    src={img11}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>

                <div className="single-img">
                  <img
                    src={img11}
                    className="img-fluid rounded "
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">
                    <span className="currency">&#2547;</span> 25.00
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sell-your-way-section">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="banner-bottom-right">
                <div className="banner-bottom-right-header pt-3 pb-4">
                  <h2>Sell your way</h2>
                </div>
                <div className="banner-bottom-right-description pb-3">
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem.
                  </p>
                </div>
                <button type="button" class="btn btn-dark">
                  Sell on Baniqa
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="banner-bottom-left">
                <img
                  src={img12}
                  className="rounded img-fluid mt-3 mb-2"
                  style={{ boxShadow: "10px 10px 8px #cccccc" }}
                  alt=""
                  width="100%"
                  height="700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="meet-sellers-section pt-5">
          <div className="meet-sellers-header-section">
            <div className="row">
              <div className="col-md-12">
                <h2 className="pb-5">Meet Sellers</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="img-group d-flex justify-content-between">
                <div className="single-img">
                  <img
                    src={img10}
                    className="img-fluid rounded pr-2"
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">@americanmadness</small>
                </div>

                <div className="single-img">
                  <img
                    src={img11}
                    className="img-fluid rounded pr-2"
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">@americanmadness</small>
                </div>

                <div className="single-img">
                  <img
                    src={img10}
                    className="img-fluid rounded pr-2"
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">@americanmadness</small>
                </div>

                <div className="single-img">
                  <img
                    src={img11}
                    className="img-fluid rounded pr-2"
                    alt="Responsive image "
                    width="300"
                    height="300"
                  />
                  <small className="font-weight-bold">@americanmadness</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
