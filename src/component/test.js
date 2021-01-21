import React, { PureComponent } from "react";
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization
} from "react-shopping-cart";
 
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.min.css";
import "font-awesome/css/font-awesome.min.css";
 
const { getDefaultLocalization } = cartLocalization;
 
// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const iPadCaseLocalization = {
  color: "Color",
  iPadCase: "iPad case",
  red: "Red",
  green: "Green",
  yellow: "Yellow",
  GBP: "£",
  EUR: "€",
  USD: "$"
};
 
const iPadPropertiesWithAdditionalCostLocalization = {
  yellow: "Yellow (+{cost}{localizedCurrency})"
};

const addRow = () => {
//  console.log(e.target.parentNode.parentNode.parentNode.children[1].children[1].children[0].getAttribute("src"));
//        
//  e.target.parentNode.parentNode.parentNode.children[1].children[0].innerText = "";
//
//  e.target.parentNode.parentNode.parentNode.children[1].children[1].children[0].setAttribute("src", "");
//
//  e.target.parentNode.parentNode.parentNode.children[1].children[2].innerText = "";
//
//  e.target.parentNode.parentNode.parentNode.children[1].children[3].innerText = "";
//
//  e.target.parentNode.parentNode.parentNode.children[1].children[4].children[0].className = "";
    
  const div = document.createElement('div');

  div.className = 'row';

  div.innerHTML = `
    <div className="col-md-2 text-center align-self-center">${props.productCount}</div>
    <div className="col-md-2">
        <img src={props.productSrcImg} alt="" />
    </div>
    <div className="col-md-4 text-center align-self-center">${props.productTitle}</div>
    <div className="col-md-3 text-center align-self-center">${props.productPrice}</div>
    <div className="col-md-1 text-center align-self-center"><i className="fa fa-trash" aria-hidden="true" style="font-size: 10px"></i></div>
  `;

  document.getElementById('content').appendChild(div);
}

function removeRow(input) {
  document.getElementById('content').removeChild(input.parentNode);
}
 
class App extends PureComponent {
  state = {
    products: {},
    product: {
      name: "iPadCase",
      id: "ipad-case",
      path: "/shop/ipad-case/",
      properties: {
        color: [
          "red",
          "green",
          {
            additionalCost: {
              GBP: 1,
              EUR: 2,
              USD: 3.5
            },
            value: "yellow"
          }
        ]
      },
      propertiesToShowInCart: ["color"],
      prices: { GBP: 70, EUR: 80, USD: 90 },
      currency: "GBP",
      imageSrc: "1-483x321.jpeg"
    },
    getProductLocalization: getDefaultLocalization("product", "en", {
      ...iPadCaseLocalization,
      ...iPadPropertiesWithAdditionalCostLocalization
    }),
    getCheckoutButtonLocalization: getDefaultLocalization(
      "checkoutButton",
      "en",
      iPadCaseLocalization
    ),
    getCartLocalization: getDefaultLocalization(
      "cart",
      "en",
      iPadCaseLocalization
    )
  };
 
  addProduct = (key, product, currency) =>
    void this.setState(
      ({
        products: { [key]: cartProduct = { quantity: 0 }, ...restOfProducts }
      }) => ({
        products: {
          ...restOfProducts,
          [key]: {
            ...product,
            quantity: product.quantity + cartProduct.quantity
          }
        }
      })
    );
 
  generateProductKey = (id, properties) =>
    `${id}/${Object.entries(properties).join("_")}`;
 
  updateProduct = (key, updatedProduct) => void console.log(":)");
 
  removeProduct = key => void console.log(":C");
 
  render() {
    const {
      addProduct,
      generateProductKey,
      updateProduct,
      removeProduct,
      state 
    } = this;
 
    const {
      getProductLocalization,
      getCheckoutButtonLocalization,
      getCartLocalization,
      products,
      product 
    } = state;
 
    const checkoutButtonElement = (
      <CheckoutButtonComponent
        grandTotal={500}
        hidden={false}
        checkoutURL="/to/my/checkout"
        currency="GBP"
        getLocalization={getCheckoutButtonLocalization}
      />
    );
    return (
      <div className="container">
        <ProductComponent
          {...product}
          checkoutButton={checkoutButtonElement}
          onAddProduct={
            addProduct
            // Help product to get into the cart
          }
          generateProductKey={
            generateProductKey
            // create product key as you wish
          }
          getLocalization={getProductLocalization}
        />
 
        <CartComponent
          products={
            products
            // Provide your own product's Object(Look at Products)
          }
          onUpdateProduct={
            updateProduct
            // Update something
          }
          getLocalization={getCartLocalization}
          currency="GBP"
          onRemoveProduct={
            removeProduct
            // Remove something
          }
          checkoutButton={checkoutButtonElement}
          isCartEmpty={false}
          getLocalization={getCartLocalization}
        />
      </div>
    );
  }
}
 
export default App;