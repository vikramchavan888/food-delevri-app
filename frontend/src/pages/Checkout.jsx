import React from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Resturent from "../components/Resturent";
import Footer from "../components/Footer";
import { useAddress } from "../context/AddressContext";
import { useContext, useEffect,useState } from "react";
import { UserContext } from "../context/UserContext";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess, Usererror } from "../utils";

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) { navigate("/login");}}, [user, navigate]);
    if (!user) {return null; }

  const { cart } = useCart();
  
   const { selectedAddress } = useAddress();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity,0 + 30);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


 

  return (
    <>
      <Navbar />
      <div className="checkout-nav">
        <img
          className="checkout-order-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
        />

        <div className="checkout-nav-links">
          <div className="checkout-nav-links-home">Home</div>
          <div className="checkout-nav-links-SpecialOffers">Special Offers</div>
          <div className="checkout-nav-links-Restaurants">Restaurants</div>
          <div className="checkout-nav-links-TrackOrder">Track Order</div>
          <div className="checkout-nav-links-login-signup">
            <img src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png" />

            <p>Hey {user.name}</p>
          </div>
        </div>
      </div>
      <h2 onClick={() => window.history.go(-1)} className="Your-order-details">
        🡠 Your Order Details
      </h2>
      <div className="checkout-container">
        <div className="checkout-items">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="checkout-item-details">
                <img
                  className="checkout-item-img"
                  src={item.img}
                  alt={item.name}
                />
                <span>
                  <h3>{item.name}</h3>
                  <p>{item.quantity}x item</p>
                </span>
              </div>
              <div className="checkout-item-price">
                <p>₹{item.price}</p>
              </div>
            </div>
          ))}
          <p className="checkout-notes">Notes</p>
          <div className="checkout-items-note">Add order notes</div>
        </div>

        <div className="checkout-summary">
          <div
            className="Delivery-addres"
            onClick={() => navigate("/manage-address")}
          >
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732873463/Icon_ovnirk.png" />
            <span>
              <h4>Delivery address</h4>
              <p>
                {selectedAddress
                  ? selectedAddress.addressline
                  : "No address selected"}
              </p>
            </span>
          </div>

          <div className="checkout-summary-tax">
            <span>
              <p>Items</p>
              <p>{totalPrice}</p>
            </span>
            <span>
              <p>Sales Tax</p>
              <p>₹10</p>
            </span>
          </div>
          <div className="checkout-action-tax">
            <span>
              <p>Subtotal({totalItems} Items) </p>
              <p>{totalPrice + 10}</p>
            </span>
          </div>
          <button
            onClick={() => navigate("/payment")}
            className="checkout-button"
          >
            Choose Payment Method
          </button>
        </div>
      </div>
      <Resturent />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Checkout;
