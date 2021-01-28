import React from 'react';
import { Link } from 'react-router-dom';
import Headers from '../layout/Header/Headers';
import Footers from '../layout/Footer/Footers';
import img10 from '../../assets/images/page_img/10.jpg';
import img11 from '../../assets/images/page_img/11.jpg';
import img12 from '../../assets/images/page_img/12.jpg';
import img13 from '../../assets/images/page_img/13.jpg';
import img13_1 from '../../assets/images/page_img/13.png';
import img14 from '../../assets/images/page_img/14.jpg';
import img15 from '../../assets/images/page_img/15.jpg';
import imgk13 from '../../assets/images/page_img/k13.jpg';
import seller1 from '../../assets/images/best-seller.jpeg'
import seller2 from '../../assets/images/best-seller2.jpeg'
import seller3 from '../../assets/images/best-seller3.png'
import seller4 from '../../assets/images/best-seller4.png'
import './Homes.css';

const Homes = (props) => {
    return (
        <section id="homes-section">
          {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}
          
          <Headers />
          
          <section className="search">
            {/* <div className="container">
              <div className="title">
                <h2>what are you looking for today ?</h2>
              </div>
              <div className="search-box py-4">
                <input className="form-control" type="text" placeholder="SEARCH...." />
              </div>
            </div> */}
          </section>

          <section className="recom-section">
            <div className="title">
              <h2>recommended for you:</h2>
            </div>
            <div className="section-items">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img10} alt="recom-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img11} alt="recom-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img12} alt="recom-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img13} alt="recom-items" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="new-seller">
            <div className="title">
              <h2>our best sellers</h2>
            </div>
            <div className="section-items">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller1} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller2} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller3} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller4} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="fav_weekly_items">
              <div className="title">
                <h2>shop our weekly favourite:</h2>
              </div>
              <div className="section-items">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img10} alt="favourite-itneseller" />          
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img11} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img12} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img13} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img14} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img15} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={imgk13} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                    <div className="col-xl-3 col-md-4">
                      <Link to={'/page'}>
                        <div className="img">
                          <img className="rounded" src={img13_1} alt="favourite-items" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          <section className="popular-items">
            <div className="title">
              <h2>Foods Near you</h2>
            </div>
            <div className="section-items">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img10} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img11} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img12} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img13} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img14} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img15} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={imgk13} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img13} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="popular-items">
            <div className="title">
              <h2>our most popular items:</h2>
            </div>
            <div className="section-items">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img10} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img11} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img12} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img13} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img14} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img15} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={imgk13} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={img13} alt="popular-items" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="new-seller">
            <div className="title">
              <h2>our new seller</h2>
            </div>
            <div className="section-items">
              <div className="container">
                <div className="row">
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller4} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller3} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller2} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                  <div className="col-xl-3 col-md-4">
                    <Link to={'/page'}>
                      <div className="img">
                        <img className="rounded" src={seller1} alt="new-seller" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footers />
        </section>
    );
}

export default Homes;
