import React, { useState, useEffect, useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Orderplaced.css";

const Orderplaced = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const { cart } = useCart();
  return (
    <>
      <Navbar />
      <div className="orderscucess-nav">
        <img
          className="orderscucess-order-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
        />

        <div className="orderscucess-nav-links">
          <div className="orderscucess-nav-links-home">Home</div>
          <div className="orderscucess-nav-links-SpecialOffers">
            Special Offers
          </div>
          <div className="orderscucess-nav-links-Restaurants">Restaurants</div>
          <div className="orderscucess-nav-links-TrackOrder">Track Order</div>
          <div
            onClick={() => navigate("/update-profile")}
            className="orderscucess-nav-links-login-signup"
          >
            <img src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png" />

            <p>Hey {user.name}</p>
          </div>
        </div>
      </div>

      <div className="orderscucess-dispaly">
        <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733135036/Icon_2_jlrwuk.png" />
        <h4>Order Placed Successfully</h4>
        <p>
          Your order is confirmed and on its way. Get set to<br></br> savor your
          chosen delights!
        </p>

        <div className="orderscucess-display-item">
          {cart.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          ))}
          <button
            onClick={() => navigate("/")}
            className="orderscucess-home-button"
          >
            Back to Home
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Orderplaced;
