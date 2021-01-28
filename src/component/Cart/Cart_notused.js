import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CardConsumer } from "../../context/context";
import "./Cart.css";

const Cart = () => {
  //     let history = useHistory();
  //    const [cartProductCount, setCartProductCount] = useState();

  //     const handleProductCountUpArrow = (e) => {
  //         console.log(handleProductCountUpArrow);
  //         props.handleProductCount(props.productCount + 1);

  //         const cartDoc = document.getElementsByClassName("nav-item")[0].children[0].children[1];
  //         cartDoc.innerText = props.productCount + 1;

  //         setCartProductCount(props.productCount + 1);
  //     }

  //     const handleProductCountDownArrow = (e) => {
  //         console.log(handleProductCountDownArrow);
  //         props.handleProductCount(props.productCount - 1);

  //         const cartDoc = document.getElementsByClassName("nav-item")[0].children[0].children[1];
  //         cartDoc.innerText = props.productCount;

  //         if(props.productCount <= 0) {
  //           cartDoc.innerText = 0;
  //         } else {
  //           cartDoc.innerText = props.productCount - 1;
  //         }

  //         setCartProductCount(props.productCount - 1);
  //     }

  //     const onDelete = (e) => {
  //       const cartSectionDiv = e.target.parentNode.parentNode.parentNode;
  //       const rowClass = e.target.parentNode.parentNode;

  //       e.target.parentNode.parentNode.remove();

  //       props.clickHandleCart(e, cartSectionDiv, rowClass);
  //       props.addToCartHandler(e, cartSectionDiv, rowClass);

  //       const cartDoc = document.getElementsByClassName("nav-item")[0].children[0].children[1];
  //       cartDoc.innerText = props.productCount * 0;
  //       cartDoc.style.display = "none";

  //       setCartProductCount(0);
  //     }

  //     const formatNumber = num => {
  //         const parsesNumber = parseInt(num);

  //         const precision = parsesNumber.toFixed(2);
  //         return Number(precision);
  //     }

  //     const totalPrice = formatNumber(props.productCount) * formatNumber(props.productPrice);

  return (
    <>
      {/* <div className="go_top">
            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
          </div> */}
      <h2>abcd</h2>
      <CardConsumer>
        {({ product }) => ({
          if(product) {
            product.map((item) => {
              return (
                <div>
                  <div className="row">
                    <div className="col-md-12">
                      <h3 className="text-center font-weight-bold pb-3">
                        Cart Item
                      </h3>
                    </div>
                    <div className="row">
                      <div className="col-md-2 text-center align-self-center">
                        <i
                          className="fa fa-angle-up"
                          aria-hidden="true"
                          style={{ cursor: "pointer", fontWeight: "bold" }}
                          onClick={console.log("a")}
                        ></i>
                        <p>{item.count}</p>
                        <i
                          className="fa fa-angle-down"
                          aria-hidden="true"
                          style={{ cursor: "pointer", fontWeight: "bold" }}
                          onClick={console.log("a")}
                        ></i>
                      </div>

                      <div className="col-md-2">
                        <img className="rounded-circle" src={item.img} alt="" />
                      </div>
                      <div className="col-md-4 text-center align-self-center">
                        {item.name}
                      </div>
                      <div className="col-md-3 text-center align-self-center">
                        &#2547; {item.price} BDT
                      </div>
                      <div className="col-md-1 text-center align-self-center">
                        <i
                          className="fa fa-trash"
                          aria-hidden="true"
                          onClick={console.log("a")}
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="d-flex justify-content-center ml-5">
                        <button type="button" class="btn btn-primary mt-5">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
          },
        })}
      </CardConsumer>

      {/* {
                props.productCount ?
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-center ml-5">
                            <button type="button" class="btn btn-primary mt-5">Checkout</button>
                        </div>
                    </div>
                </div> : <p className="text-center font-weight-light text-danger">Your Cart Is Empty</p>
            } */}
    </>
  );
};

export default Cart;
