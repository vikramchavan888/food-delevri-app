import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
const Navbar = () => {
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
  const { setIsBasketVisible } = useContext(BasketContext);

  const handleBasketToggle = () => {
    setIsBasketVisible((prev) => !prev);
  };
  return (
    <>
      <div className="nav-div">
        <div className="Star-div">
          <img
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732100192/star_swdqeu.jpg"
            alt="star"
          />
          &nbsp;
          <p>Get 5% Off your first order,</p>
          <a href="#">Promo: ORDER5</a>
        </div>
        <div className="locatioon-div">
          <img
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732095908/Location_fncetg.png"
            alt="star"
          />
          &nbsp;
          <p>Regent Street, A4, A4201, London</p> &nbsp; &nbsp;
          <a href="#">change location</a>
        </div>
        <div onClick={handleBasketToggle} className="cart-div">
          <div className="cart-div-one">
            <img
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732101617/Full_Shopping_Basket_qkdiel.png"
              alt="star"
            />
            &nbsp; &nbsp; <p>My cart</p>
          </div>
          <div className="cart-div-two"></div>
          <div className="cart-div-three">
            <img
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732818607/Forward_Button_2_ti0vei.png"
              alt="star"
            />
          </div>
        </div>
      </div>
      <div className="mobile-nave">
        <span>
          <img
            className="navbar-order-img"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
          />
          <img
            className="navbar-menu-img"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733338047/Menu_1_fyyun8.png"
          />
        </span>
        <span>
          <div className="navbar-profile-img-div">
            <img
              className="navbar-profile-img"
              src=" https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733073362/Ellipse_11_osiyje.png"
            />
            <p> Hey {user.name}</p>
          </div>
          <div onClick={handleBasketToggle} className="navbar-cart-img-div">
            <img
              className="navbar-cart-img"
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732101617/Full_Shopping_Basket_qkdiel.png"
              alt="star"
            />
            &nbsp; &nbsp; <p>My cart</p>
          </div>
        </span>
        <div className="nav-location">
          <img
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732095908/Location_fncetg.png"
            alt="star"
          />
          &nbsp;
          <p>Regent Street, A4, A4201, London</p> &nbsp; &nbsp;
        </div>
      </div>
    </>
  );
};

export default Navbar;
