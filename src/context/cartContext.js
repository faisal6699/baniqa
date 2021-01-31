import React, { createContext, useReducer } from "react";
import { CartReducers, sumItems } from "./cartReducers";

const storage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cartItems: storage,
  ...sumItems(storage),
  checkOut: false,
};

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer( CartReducers, initialState);

  const increase = (payload) => {
    dispatch({ type: "INCREASE", payload });
  };

  const decrease = (payload) => {
    dispatch({ type: "DECREASE", payload });
  };

  const add_item = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const remove_item = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearCart = (payload) => {
    dispatch({ type: "CLEAR", payload });
  };

  const handle_checkout = () => {
    dispatch({ type: "CHECKOUT" });
  };

  
  const contextValues = {
    increase,
    decrease,
    add_item,
    remove_item,
    clearCart,
    handle_checkout,
    
    ...state,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider