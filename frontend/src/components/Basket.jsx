import React from "react";
import "./Basket.css";

import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Basket = () => {

const { cart, dispatch, generateShareableLink } = useCart();

const handleShareCart = async () => {
  const link = await generateShareableLink();
  if (link) {
    navigator.clipboard.writeText(link);
    alert(`Cart link copied: ${link}`);
  } else {
    alert("Failed to generate shareable link.");
  }
};


  const navigate = useNavigate();
  const handleIncreaseQuantity = (itemId) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: itemId });
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: itemId });
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


 //if (cart.length === 0) {
   //return null;
 //}

  return (
    <div className="basket-div">
      <div className="Basket-container">
        <div className="Share-Cart-button" onClick={handleShareCart}></div>
        <h2>Your Cart</h2>
        <ul className="Basket-items">
          {cart.map((item) => (
            <li key={item.id} className="Basket-item">
              <div
                className="Basket-increaser"
                onClick={() => handleIncreaseQuantity(item.id)}
              >
                X{item.quantity}
              </div>
              <div className="Basket-item-details">
                <span className="Basket-item-price">₹{item.price}</span>
                <span className="Basket-item-name">{item.name}</span>
                <span className="Basket-item-dcription">
                  {item.description}
                </span>
              </div>
              <div
                className="reducer"
                onClick={() => handleDecreaseQuantity(item.id)}
              >
                <img
                  className="reducer-img"
                  src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732791499/Remove_kvmygs.png"
                />
              </div>
            </li>
          ))}
        </ul>
        <div className="Basket-discount-div">
          <span>
            <h3>Sub Total:</h3>₹{totalPrice}
          </span>
          <span>
            <h3>Discounts:</h3>
            {cart.length === 0 ? 0 : -40}
          </span>
          <span>
            <h3>Delivery Fee:</h3>
            {cart.length === 0 ? 0 : 70}
          </span>
        </div>
        <div className="Basket-total-pay">
          <div className="Totalpayable">
            <p>Total to pay</p>
            <h1> ₹{cart.length === 0 ? 0 : totalPrice + 30}</h1>
          </div>
          <div className="Basket-total-pay-options">
            <p>Choose your free item..</p>
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732810093/Forward_Button_uzjxgs.png" />
          </div>
          <div className="Basket-total-pay-options">
            <p>Choose your free item..</p>
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732810094/Forward_Button_1_dhfbkc.png" />
          </div>
        </div>

        <div className="Basket-Delivery-collection">
          <div className="Basket-Delivery">
            <span>
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732816146/Delivery_Scooter_icfwbj.png" />
              <h3>Delivery</h3>
              <p>Starts at 17:50</p>
            </span>
          </div>
          <div className="Basket-collection">
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732816146/Delivery_Scooter_icfwbj.png" />
            <h3>Delivery</h3>
            <p>Starts at 17:50</p>
          </div>
          <div></div>
        </div>
        <div className="checkout">
          <button
            onClick={() => navigate("/checkout")}
            disabled={cart.length === 0}
            className={cart.length === 0 ? "disabled-button" : ""}
          >
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732818607/Forward_Button_2_ti0vei.png" />
            <h3>Checkout!</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
