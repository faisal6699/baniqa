import { SentimentSatisfied } from "@material-ui/icons";
import React, { createContext, useReducer, useState } from "react";

const CartOrdered = createContext();

const CardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function addProduct(name, price, count, img) {
    let check = false;
    // product.map((item, index) => {
    //   if (item.name === name) {
    //     setProduct(...product[index], { count: count });
    //     check = true;
    //   }
    // });

    if (!check) {
      let element = {
        name: name,
        price: price,
        count: count,
        img: img,
      };
      setProduct([...product, element]);
    }

    console.log(check);
  }

  return (
    <CartOrdered.Provider
      value={{
        count: count,
        product: product,
        increment: increment,
        decrement: decrement,
        addProduct: addProduct,
      }}
    >
      {children}
    </CartOrdered.Provider>
  );
};

const CardConsumer = CartOrdered.Consumer;

export { CardProvider, CardConsumer };
