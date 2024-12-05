import React from 'react'
import "./Shaurmaone.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "../context/BasketContext";
import Resturent from "../components/Resturent";
import Informationandtime from "../components/Informationandtime";
import Map from "../components/Map";
import Cart from "../components/Basket";
import Reviews from "../components/Reviews";
import { useCart } from "../context/CartContext";

const Shaurmaone = () => {

 const [foodItems, setFoodItems] = useState([]);
 const [groupedItems, setGroupedItems] = useState({});
 const { dispatch } = useCart();

 const { isBasketVisible } = useContext(BasketContext);
 const navigate = useNavigate();
 const { user } = useContext(UserContext);

 const [searchTerm, setSearchTerm] = useState("");
 useEffect(() => {
   if (!user) {
     navigate("/login");
   }
 }, [user, navigate]);

 if (!user) {
   return null;
 }
const handleserachBurgers = (e) => {
  setSearchTerm(burger);
};
const handleserachSnacks = (e) => {
  setSearchTerm(Snacks);
};
const handleserachFries = (e) => {
  setSearchTerm(Fries);
};
const handleserachSalads = (e) => {
  setSearchTerm(Salads);
};
const handleserachcolddrink = (e) => {
  setSearchTerm(colddrink);
};
const handleserachHotdrinks = (e) => {
  setSearchTerm(Hotdrinks);
};
const handleserachHappyMeal = (e) => {
  setSearchTerm(meal);
};


 const handleSearchChange = (e) => {
   setSearchTerm(e.target.value.toLowerCase());
 };
 console.log("Search Term: ", searchTerm);

 useEffect(() => {
   const fetchFoodItems = async () => {
     try {
       const response = await fetch(
         `https://food-delevri-app.vercel.app/getFooditems`
       );
       const data = await response.json();

       const grouped = data.reduce((acc, item) => {
         if (!acc[item.category]) acc[item.category] = [];
         acc[item.category].push(item);
         return acc;
       }, {});

       setFoodItems(data);
       setGroupedItems(grouped);
     } catch (error) {
       console.error("Error fetching food items:", error);
     }
   };

   fetchFoodItems();
 }, []);

 const handleAddToCart = (item) => {
   dispatch({ type: "ADD_TO_CART", payload: item });
 };

 // Filter foodItems based on searchTerm
 const filteredItems = foodItems.filter(
   (item) => item.name.toLowerCase().includes(searchTerm) // Case-insensitive match
 );

 // Group filtered items by category
 const filteredGroupedItems = filteredItems.reduce((acc, item) => {
   if (!acc[item.category]) acc[item.category] = [];
   acc[item.category].push(item);
   return acc;
 }, {});

  return (
    <>
      <div className="shaurma-nav">
        <img
          className="shaurma-order-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
        />

        <div className="shaurma-nav-links">
          <div className="shaurma-nav-links-home">Home</div>

          <div className="shaurma-nav-links-SpecialOffers">Special Offers</div>
          <div className="shaurma-nav-links-Restaurants">Restaurants</div>
          <div className="shaurma-nav-links-TrackOrder">Track Order</div>
          <div className="shaurma-nav-links-login-signup">
            <img src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png" />

            <p>{user.name}</p>
          </div>
        </div>
      </div>
      <div className="shaurma-banner">
        <div className="shaurma-banner-name-opentill">
          <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732616172/Clock_1_gyashd.png" />
          <p>Delivery in 20-25 Minutes</p>
        </div>
        <img
          className="shaurma-banner-main-img"
          src=" https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732611371/40abc99b6edf6290110ecf4a706ecaa8_em1x4q.png"
        />
        <div className="gradient"></div>
        <img
          className="shaurma-banner-first-img"
          src=" https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732611371/40abc99b6edf6290110ecf4a706ecaa8_em1x4q.png"
        />

        <img
          className="shaurma-banner-rating"
          src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732600865/Rectangle_62_dugten.png"
        />
        <div className="shaurma-banner-name">
          <p>I'm lovin' it!</p>
          <h1>McDonald’s East London</h1>
          <span>
            <div className="shaurma-banner-name-Minimum">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732614460/Order_Completed_ofpwfd.png" />
              <p>Minimum Order: 12 GBP</p>
            </div>
            <div className="shaurma-banner-name-Minimum">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732614459/Motocross_acsbhl.png" />
              <p>Delivery in 20-25 Minutes</p>
            </div>
          </span>
        </div>
      </div>

      <div className="search-input-of-all-resdturent">
        <span>
          <h1>All Offers from McDonald’s East London</h1>
          <input
            type="text"
            placeholder="Search food items..."
            name="search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </span>
        <div className="links-of-all-resdturent">
          <div className="link-of-all-resdturent">Offers</div>
          <div onClick={handleserachBurgers} className="link-of-all-resdturent">
            Burgers
          </div>
          <div onClick={handleserachFries} className="link-of-all-resdturent">
            Fries
          </div>
          <div onClick={handleserachSnacks} className="link-of-all-resdturent">
            Snacks
          </div>
          <div onClick={handleserachSalads} className="link-of-all-resdturent">
            Salads
          </div>
          <div
            onClick={handleserachcolddrink}
            className="link-of-all-resdturent"
          >
            Cold drinks
          </div>
          <div
            onClick={handleserachHotdrinks}
            className="link-of-all-resdturent"
          >
            Hot drinks
          </div>
          <div
            onClick={handleserachHappyMeal}
            className="link-of-all-resdturent"
          >
            Happy Meal
          </div>
          <div className="link-of-all-resdturent">Desserts</div>
          <div className="link-of-all-resdturent">Sauces</div>
          <div className="link-of-all-resdturent">Orbit®</div>
        </div>
      </div>
      <div className="shaurma-tem-cart">
        <div className="shaurma-landingpage">
          <div className="shaurma-deals-options">
            <div className="shaurma-deals-Chef-Burgers-London">
              <div className="gradient"></div>
              <div className="shaurma-deals-options-discount">-20%</div>
              <div className="shaurma-deals-options-add">
                <img
                  className="shaurma-deals-options-add-img"
                  src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732627470/Plus_gavz31.png"
                />
              </div>
              <p>McDonald’s East London</p>
              <h1>First Order Discount</h1>
              <img
                className="shaurma-deals-options-main-img"
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732368003/Rectangle_8_grurom.png"
              />
            </div>
            <div className="shaurma-deals-Grand-Ai-Cafe-London">
              <div className="gradient"></div>
              <div className="shaurma-deals-options-discount">-20%</div>
              <div className="shaurma-deals-options-add">
                <img
                  className="shaurma-deals-options-add-img"
                  src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732627470/Plus_gavz31.png"
                />
              </div>
              <p>McDonald’s East London</p>
              <h1>Vegan Discount</h1>
              <img
                className="shaurma-deals-options-main-img"
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732368003/Rectangle_8_grurom.png"
              />
            </div>
            <div className="shaurma-deals-Butterbrot-CafeLondon">
              <div className="gradient"></div>
              <div className="shaurma-deals-options-discount">-20%</div>
              <div className="shaurma-deals-options-add">
                <img
                  className="shaurma-deals-options-add-img"
                  src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732627470/Plus_gavz31.png"
                />
              </div>
              <p>McDonald’s East London</p>
              <h1>Free ice Cream Offer</h1>
              <img
                className="shaurma-deals-options-main-img"
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732368010/dealimga_qgsunp.png"
              />
            </div>
          </div>
          <div>
            {Object.keys(filteredGroupedItems).map((category) => (
              <div className="foodlist-category" key={category}>
                <h2>{category}</h2>
                <div className="foodlist-category-options">
                  {filteredGroupedItems[category].map((item) => (
                    <div className="foodlist-category-item" key={item._id}>
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="foodlist-category-options-add"
                      >
                        <img
                          className="foodlist-category-options-add-img"
                          src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732627470/Plus_gavz31.png"
                          alt="Add"
                        />
                      </button>
                      <div className="foodlist-category-item-info">
                        <div className="foodlist-category-item-info-name">
                          {item.name}
                        </div>
                        <div className="foodlist-category-description">
                          <p>{item.description}</p>
                        </div>
                        <div className="foodlist-category-item-info-price">
                          ₹{item.price}
                        </div>
                      </div>
                      <img
                        className="foodlist-category-item-img"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {isBasketVisible && <Cart />}
      </div>

      <Informationandtime />
      <div className="Map-div">
        <div className="Map-div-resturan-location-details">
          <h1>McDonald’s</h1>
          <h2>South London</h2>
          <p>
            Tooley St, London Bridge, London SE1 2TF,<br></br>United Kingdom
            <br></br>
          </p>
          <p>
            <strong>Phone number</strong>
          </p>

          <span>+934443-43</span>
          <p>
            <strong>Website</strong>
          </p>
          <span> http://mcdonalds.uk/</span>
        </div>
        <Map />
      </div>
      <Reviews />
      <Resturent />
    </>
  );
};

export default Shaurmaone