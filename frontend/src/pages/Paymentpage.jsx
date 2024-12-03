import { useCart } from "../context/CartContext";
import React, { useEffect, useState, useContext } from "react";
import "./Paymentpage.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Paymentpage = () => {

  
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (!user) {
      // Redirect to login if user is not logged in
      navigate("/login");
    }
  }, [user, navigate]);

  if (!user) {
    // Optional: Render nothing or a loading placeholder
    return null;
  }

  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      name: "MaestroCard",
      img: "https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733129926/Social_Icon_znky0m.png",
    },
    {
      id: 2,
      name: "PayPal",
      img: "https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733129926/Social_Icon_1_rkqcjm.png",
    },
    {
      id: 3,
      name: "Stripe",
      img: "https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733129926/Social_Icon_2_v4ns26.png",
    },
  ];


  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0 + 30
  );

  return (
    <>
      <Navbar />
      <div className="payment-nav">
        <img
          className="payment-order-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
        />

        <div className="payment-nav-links">
          <div className="payment-nav-links-home">Home</div>
          <div className="payment-nav-links-SpecialOffers">Special Offers</div>
          <div className="payment-nav-links-Restaurants">Restaurants</div>
          <div className="payment-nav-links-TrackOrder">Track Order</div>
          <div
            onClick={() => navigate("/update-profile")}
            className="payment-nav-links-login-signup"
          >
            <img src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png" />

            <p>Hey {user.name}</p>
          </div>
        </div>
      </div>
      <h2 onClick={() => navigate("/checkout")} className="Your-order-details">
        🡠Choose and Pay
      </h2>
      <div className="payment-container">
        <div className="payment-items">
          <div className="paymentWallet">
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733131593/Icon_1_rkwjdk.png" />
            <span>
              <h4>Delivery address</h4>
              <p>Available balance: ₹300</p>
            </span>
            <img
              className="paymentWallet-right-arow"
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733131893/ArrowRight_hqi0io.png"
            />
          </div>
          {cards.map((card) => (
            <div
              key={card.id}
              className="payment-card"
              onClick={() => setActiveCard(card.id)}
            >
              <div className="payment-card-info">
                <img src={card.img} />

                <span className="payment-card-name">{card.name}</span>
              </div>
              <div
                className={`showactive-payment-card ${
                  activeCard === card.id ? "active-card" : ""
                }`}
              ></div>
            </div>
          ))}
          <div className="add-card-option">
            <span>+ Add Debit Card</span>
          </div>
        </div>

        <div className="payment-summary">
          <span>
            <p>Amount to be payed</p>
            <p>{totalPrice + 10}</p>
          </span>
          <button
            onClick={() => navigate("/OrderSuccessful")}
            className="payment-button"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Paymentpage;
