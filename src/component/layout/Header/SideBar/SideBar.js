import React from "react";
import Cart from "../../../Cart/Cart";
import { slide as Menu } from "react-burger-menu";
import { CardConsumer } from "../../../../context/context";
import "./SideBar.css";

const SideBar = ({props}) => {
  return (
    <Menu {...props} left>
      <Cart />
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
