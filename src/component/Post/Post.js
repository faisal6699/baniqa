import React, { useContext, useReducer, useState } from "react";
import SideBar from "../layout/Header/SideBar/SideBar";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Headers from "../layout/Header/Headers";
import Footers from "../layout/Footer/Footers";
import Cart from "../Cart/Cart";
import owner2 from "../../assets/images/owner2.jpg";
import img10 from "../../assets/images/page_img/10.jpg";
import img11 from "../../assets/images/page_img/11.jpg";
import img12 from "../../assets/images/page_img/12.jpg";
import img13 from "../../assets/images/page_img/13.jpg";
import img13_1 from "../../assets/images/page_img/13.png";
import img14 from "../../assets/images/page_img/14.jpg";
import img15 from "../../assets/images/page_img/15.jpg";
import imgk13 from "../../assets/images/page_img/k13.jpg";
import "./Post.css";
import { CartContext } from "../../context/cartContext";
import { CardProvider } from "../../context/context";

const Post = (props) => {
  // const [productCount, setProductCount] = useState(0);
  // const [productSrcImg, setProductSrcImg] = useState();
  // const [productTitle, setProductTitle] = useState();
  // const [productPrice, setProductPrice] = useState();
  // const [clickType, setClickType] = useState();
  // const [clickCartType, setClickCartType] = useState();
  // const [cartSectionDivs, setCartSectionDiv] = useState();
  // const [rowClasses, setRowClass] = useState();
  // const [orders, setOrders] = useContext(CartOrdered)

  // console.log(context)

  const images = [
    {
      original: img10,
      thumbnail: img10,
    },
    {
      original: img11,
      thumbnail: img10,
    },
    {
      original: img12,
      thumbnail: img10,
    },
  ];
  const productName = "peral gold earring";
  const Price = 3600;
  const product1 = {
    id: 1,
    name: "peral gold earring",
    price: 3600,
    photo: { img10 },
  };

  const product2 = {
    id: 2,
    name: "peral earring",
    price: 3600,
    photo: { img10 },
  };

  const product3 = {
    id: 3,
    name: "peral gold ",
    price: 3600,
    photo: { img10 },
  };

  const { add_item, increase, cartItems } = useContext(CartContext);

  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <section id="post-section">
      <Headers />

      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card-img">
                <span className="fa fa-clone"></span>
                <img
                  className="image"
                  src={img10}
                  style={{ display: "none" }}
                  alt="product"
                />
                <ImageGallery
                  showFullscreenButton={false}
                  lazyLoad={true}
                  autoPlay={true}
                  showPlayButton={false}
                  showBullets={false}
                  showThumbnails={true}
                  showNav={false}
                  items={images}
                />

                <a href="#">
                  <i className="fa fa-heart" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-desc">
                <h2>{productName}</h2>
                <p>(a little description about the product)</p>
                <div style={{ display: "flex" }}>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked final"></span>
                  <p>(3)</p>
                </div>

                <span>
                  <p>&#2547;</p> <p>3600</p> <p>BDT</p>
                </span>

                <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                  <div style={{paddingRight: '10px'}}>
                    {isInCart(product1) && (
                      <button
                        onClick={() => increase(product1)}
                        className="button-default"
                      >
                        add more
                      </button>
                    )}

                    {!isInCart(product1) && (
                      <button onClick={() => add_item(product1)}  className="button-default">
                        add to chart
                      </button>
                    )}
                  </div>
                  <div >
                    <button className="button-default-colorless" href="#" >
                      message seller
                    </button>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="simi-product">
        <div className="title">
          <h2>similer items</h2>
        </div>
        <div className="section-items">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img11} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img12} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img14} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img15} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={imgk13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img13} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img10} alt="user-items" />
                  </div>
                </Link>
              </div>
              <div className="col-xl-4 col-md-6">
                <Link to={"/post"}>
                  <div className="img">
                    <span className="fa fa-clone"></span>
                    <img className="rounded" src={img11} alt="user-items" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="more-product">
          <div className="title">
            <h2>more items from 6YardVintage</h2>
          </div>
          <div className="section-items">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-md-6">
                  <Link to={"/post"}>
                    <div className="img">
                      <span className="fa fa-clone"></span>
                      <img className="rounded" src={img10} alt="user-items" />
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                  <Link to={"/post"}>
                    <div className="img">
                      <span className="fa fa-clone"></span>
                      <img className="rounded" src={img11} alt="user-items" />
                    </div>
                  </Link>
                </div>
                <div className="col-xl-4 col-md-6">
                  <Link to={"/post"}>
                    <div className="img">
                      <span className="fa fa-clone"></span>
                      <img className="rounded" src={img12} alt="user-items" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </section>
  );
};

export default Post;
