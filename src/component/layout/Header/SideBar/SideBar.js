import React from "react";
import Cart from "../../../Cart/Cart";
import { slide as Menu } from "react-burger-menu";
import './SideBar.css';

const SideBar = (props) => {
  console.log(props);

  const productCount = props.productCount;
  const productSrcImg = props.productSrcImg;
  const productTitle = props.productTitle;
  const productPrice = props.productPrice;
  const clickHandleCart = props.clickHandleCart;
  const addToCartHandler = props.addToCartHandler;
  const handleProductCount = props.handleProductCount;

  return (
    <Menu {...props} left>
      <Cart
        productCount={productCount}
        productSrcImg={productSrcImg}
        productTitle={productTitle}
        productPrice={productPrice}
        clickHandleCart={clickHandleCart}
        addToCartHandler={addToCartHandler}
        handleProductCount={handleProductCount}
      />
    </Menu>
    // <Menu {...props} left>
    //   <a className="menu-item" href="/">
    //     Home
    //   </a>

    //   <a className="menu-item" href="/burgers">
    //     Burgers
    //   </a>

    //   <a className="menu-item" href="/pizzas">
    //     Pizzas
    //   </a>

    //   <a className="menu-item" href="/desserts">
    //     Desserts
    //   </a>
    // </Menu>
  );
};

export default SideBar;
