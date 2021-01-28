import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Headers from "../layout/Header/Headers";
import Footers from "../layout/Footer/Footers";
import { FaProductHunt } from "react-icons/fa";
import { CartContext } from "../../context/cartContext";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    checkOut,
    itemCount,
    total,
    handle_checkout,
    clearCart,
  } = useContext(CartContext);

  return (
    <section>
      <Headers />
      <div className="cart-main">
        <h2 className="">CART</h2>

        <div className="row" id="cart-style">
          <div className="col-md-8">
            {cartItems.length > 0 &&
              cartItems.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
          </div>
          <div className="col-md-4" id="cart-side">
            {cartItems.length > 0 && (
              <div>
                <div>
                  <p>Total Items</p>
                  <h4>{itemCount}</h4>
                  <p>Total Payment</p>
                  <h3>{total}</h3>
                </div>
                <hr />
                <div >
                  <button className="button-default" onClick={handle_checkout}>
                    Checkout
                  </button>
                  <button
                    className="button-default-colorless"
                    onClick={clearCart}
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {checkOut && (
          <div>
            <p>Checkout successful</p>
            <Link to="/">BUY MORE</Link>
          </div>
        )}
      </div>
      <Footers />
    </section>
  );
};

export default Cart;
