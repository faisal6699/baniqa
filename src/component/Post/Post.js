import React, { useState } from "react";
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

const Post = (props) => {
  const [productCount, setProductCount] = useState(0);
  const [productSrcImg, setProductSrcImg] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productPrice, setProductPrice] = useState();
  const [clickType, setClickType] = useState();
  const [clickCartType, setClickCartType] = useState();
  const [cartSectionDivs, setCartSectionDiv] = useState();
  const [rowClasses, setRowClass] = useState();

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

  const handleProductCount = (productCount) => {
    if (productCount === -1) {
      return;
    }
    setProductCount(productCount);
  };

  const clickHandleCart = (e, cartSectionDiv, rowClass) => {
    setCartSectionDiv(cartSectionDiv);
    setRowClass(rowClass);
    setProductCount(0);
    setProductPrice(0);

    if (e.target.className === "btn") {
      if (cartSectionDiv && rowClass) {
        cartSectionDiv.appendChild(rowClass);
      }
    }
  };

  const addToCartHandler = (e, cartSectionDiv, rowClass) => {
    e.preventDefault();

    const clickCartIcon = document.getElementsByClassName("nav-item")[0]
      .children[0];
    // console.log(clickCartIcon);

    // clickCartIcon.onClick = (e) => {
    //   console.log(e.target);
    //   setClickCartType("Click Cart Icon");
    // };

    clickCartIcon.addEventListener("click", (e) => {
      console.log(e.target);
      setClickCartType("Click Cart Icon");
    });

    const cartDoc = document.getElementsByClassName("nav-item")[0].children[0]
      .children[1];
    cartDoc.style.display = "block";
    cartDoc.innerText = productCount + 1;

    if (e.target.className === "btn") {
      if (cartSectionDivs && rowClasses) {
        clickHandleCart(e, cartSectionDivs, rowClasses);
      }
    }

    setClickType(e.type);

    if (e.target.className === "btn") {
      const imgSrcProduct = e.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].childNodes[1].getAttribute(
        "src"
      );
      //          console.log(imgSrcProduct);

      const titleProduct =
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode
          .childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0]
          .innerText;
      //          console.log(titleProduct);

      const priceProduct =
        e.target.parentNode.parentNode.parentNode.parentNode.parentNode
          .childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[2]
          .childNodes[2].innerText;
      //          console.log(priceProduct);

      setProductCount(productCount + 1);
      setProductSrcImg(imgSrcProduct);
      setProductTitle(titleProduct);
      setProductPrice(priceProduct);
    }
  };

  return (
    <section id="post-section">
      {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}

      <Headers />

      {/* <section className="search">
            <div className="container">
              <div className="search-box py-4">
                <input className="form-control" type="text" placeholder="SEARCH...." />
              </div>
            </div>
          </section> */}

      {/* <section className="profile">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-img">
                    <img className="rounded" style={{boxShadow: '10px 10px 8px #cccccc'}} src={owner2} alt="" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="profile-info ml-3">
                    <h2>Sohag</h2>
                    <p>HI, I'm Sohag. I make and sell handmade Pizza.</p>
                    <em>1 Hour Delivery Time</em>
                    <span>Cash On Delivery and BKash Avaliable</span>
                    <a className="btn flw" href="#"><i className="fa fa-plus" aria-hidden="true"></i> Follow</a><a className="btn msg" href="#"><i className="fa fa-plus" aria-hidden="true"></i> Message</a>
                  </div>
                </div>
                <div className="col-md-4 flex-row-reverse">
                    <div id="cart-section text-end"> */}

      {
        // clickType === "click" && clickCartType === "Click Cart Icon" ?
        // <Cart productCount={productCount} productSrcImg={productSrcImg} productTitle={productTitle} productPrice={productPrice} clickHandleCart={clickHandleCart} addToCartHandler={addToCartHandler} handleProductCount={handleProductCount} />
        // : <p className="text-center font-weight-light text-danger"></p>
      }

      {/* {
                          clickCartType === "Click Cart Icon" &&
                          <Cart productCount={productCount} productSrcImg={productSrcImg} productTitle={productTitle} productPrice={productPrice} clickHandleCart={clickHandleCart} addToCartHandler={addToCartHandler} handleProductCount={handleProductCount} />
                      } */}

      {/* {
                        productCount ?
                          <SideBar 
                            pageWrapId={"profile"} 
                            outerContainerId={"post-section"} 
                            noOverlay right 
                            productCount={productCount}
                            productSrcImg={productSrcImg}
                            productTitle={productTitle}
                            productPrice={productPrice}
                            clickHandleCart={clickHandleCart}
                            addToCartHandler={addToCartHandler}
                            handleProductCount={handleProductCount}
                          /> : ""
                      }
                    </div>
                </div>
              </div>
            </div>
          </section> */}

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
                <h2>peral gold earring</h2>
                <p>(a little description about the product)</p>
                <div style={{display: 'flex'}}>
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
                <a
                  className="btn"
                  href="#"
                  onClick={(e) => addToCartHandler(e)}
                >
                  add to card
                </a>{" "}
                <br />
                <a className="msg" href="#">
                  message seller
                </a>
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
