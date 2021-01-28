import React, { useContext } from "react";
import "./Cart.css";
import { FiMinusCircle} from 'react-icons/fi'
import {MdAddCircle} from 'react-icons/md'

import { CartContext } from "../../context/cartContext";

const CartItem = ({ product }) => {
  const { increase, decrease, remove_item } = useContext(CartContext);

  return (
    <div className="cartlist-main">
      <div className="row">
        <div className="col-md-3">
          <img alt={product.name} src={product.photo} />
        </div>
        <div className="col-md-5">
          <h5>{product.name}</h5>
          <p>Price: {product.price}</p>
        </div>

        <div className="col-md-2">
          <p>Qty: {product.quantity}</p>
        </div>

        <div className="col-md-1">
          <button className='button-default' onClick={() => increase(product)}> <MdAddCircle size='2x' /></button>
        </div>

        <div className="col-md-1">
          {product.quantity > 1 && (
            <button className='button-default-colorless' style={{backgroundColor: '#d9534f'}} onClick={() => decrease(product)}> <FiMinusCircle size='2x' /></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
