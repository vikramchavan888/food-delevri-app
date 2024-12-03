import React from 'react'
import "./Navbar.css";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext"
const Navbar = () => {

  const { setIsBasketVisible } = useContext(BasketContext);

  const handleBasketToggle = () => {
    setIsBasketVisible((prev) => !prev);
  };
  return (
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
  );
}

export default Navbar