
import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Resturent from '../components/Resturent';
import { UserContext } from "../context/UserContext";
import "./Landingpage.css";
const Landingpage = () => {

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

  return (
    <>
      <div className="landingpage-nav">
        <img
          className="landingpage-order-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
        />

        <div className="landingpage-nav-links">
          <div className="landingpage-nav-links-home">Home</div>
          <div className="landingpage-nav-links-BrowseMenu">Browse Menu</div>
          <div className="landingpage-nav-links-SpecialOffers">
            Special Offers
          </div>
          <div className="landingpage-nav-links-Restaurants">Restaurants</div>
          <div className="landingpage-nav-links-TrackOrder">Track Order</div>
          <div className="landingpage-nav-links-login-signup">
            <img src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png" />

            <p>{user.name}</p>
          </div>
        </div>
      </div>
      <div className="landindpage-banner-one">
        <div className="landindpage-banner-one-postcode">
          <p>Order Restaurant food, takeaway and groceries.</p>
          <h1 className="Feast-Your-Senses">Feast Your Senses,</h1>
          <h1 className="Fast-and-Fresh">Fast and Fresh</h1>
          <h6>Enter a postcode to see what we deliver</h6>
          <div className="landindpage-banner-one-postcode-input">
            <span className="egEC4R3TE">e.g. EC4R 3TE</span>
            <div className="landindpage-banner-one-postcode-btn ">Search</div>
          </div>
        </div>
        <img
          className="landingpage-banner-one-first-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732352908/Untitled-1_1_z8nb2o.png"
        />
        <img
          className="landingpage-banner-one-second-img"
          src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732352912/Untitled-2_1_hzyt0i.png"
        />
        <div className="landindpage-banner-one-backgroung"></div>
      </div>
      <div className="landingpage-deals">
        <div className="landingpage-deals-links">
          <div className="Up-to-40">
            Up to -40%&nbsp;
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732364469/Screenshot_4_r5vecb.png" />
            &nbsp;Order.uk exclusive deals
          </div>
          <div className="Vegan">
            <p>Vagan</p>
          </div>
          <div className="Sushi">
            <p>Shushi</p>
          </div>
          <div className="Pizza-Fast-food">
            <p>Pizza & Fast food</p>
          </div>
          <div className="others">
            <p>others</p>
          </div>
        </div>

        <div className="landingpage-deals-options">
          <div className="landingpage-deals-Chef-Burgers-London">
            <div className="gradient"></div>
            <p>Restaurant</p>
            <h4>Chef Burgers London</h4>
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732368003/Rectangle_8_grurom.png" />
          </div>
          <div className="landingpage-deals-Grand-Ai-Cafe-London">
            <div className="gradient"></div>
            <p>Restaurant</p>
            <h4>Grand Ai Cafe London</h4>
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732368003/Rectangle_8_grurom.png" />
          </div>
          <div className="landingpage-deals-Butterbrot-CafeLondon">
            <div className="gradient"></div>
            <p>Restaurant</p>
            <h4>Butterbrot Cafe London</h4>
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732368010/dealimga_qgsunp.png" />
          </div>
        </div>
      </div>
      <div className="landingpage-menu-catagoery">
        <h2>Order uk Popular Categories 🤩</h2>
        <div className="landingpage-menu-catagoery-Navigation">
          <div className="landingpage-menu-catagoery-item">
            <div className="landingpage-menu-catagoery-item-img">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732373112/Burgers_Fast_food_u1jlok.png" />
            </div>
            <div className="landingpage-menu-catagoery-item-name">
              Burgers & Fast food
              <h6>21 Restaurants</h6>
            </div>
          </div>
          <div className="landingpage-menu-catagoery-item">
            <div className="landingpage-menu-catagoery-item-img">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732373113/salad_syb0jk.png" />
            </div>
            <div className="landingpage-menu-catagoery-item-name">
              Salads<h6>32 Restaurants</h6>
            </div>
          </div>
          <div className="landingpage-menu-catagoery-item">
            <div className="landingpage-menu-catagoery-item-img">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732373112/Pasta_Casuals_qcdzvv.png" />
            </div>
            <div className="landingpage-menu-catagoery-item-name">
              Pasta & Casuals<h6>4 Restaurants</h6>
            </div>
          </div>
          <div className="landingpage-menu-catagoery-item">
            <div className="landingpage-menu-catagoery-item-img">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732373112/Pasta_Casuals_qcdzvv.png" />
            </div>
            <div className="landingpage-menu-catagoery-item-name">
              Pizza<h6>32 Restaurants</h6>
            </div>
          </div>
          <div className="landingpage-menu-catagoery-item">
            <div className="landingpage-menu-catagoery-item-img">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732373114/breakfast_uwbon2.png" />
            </div>
            <div className="landingpage-menu-catagoery-item-name">
              Breakfast<h6>4 Restaurants</h6>
            </div>
          </div>
          <div className="landingpage-menu-catagoery-item">
            <div className="landingpage-menu-catagoery-item-img">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732373112/soup_nf2dlg.png" />
            </div>
            <div className="landingpage-menu-catagoery-item-name">
              Soups<h6>32 Restaurants</h6>
            </div>
          </div>
        </div>
      </div>
      <span>
        <Resturent />
      </span>
      <div className="landindpage-banner-two">
        <img
          className="landindpage-banner-two-first-img"
          src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732376553/cb92a734a26973d3c7cd83699addf233_vi31oc.png"
        />

        <div className="landindpage-banner-two-image-backgroung">
          <img
            className="landindpage-media-q-image"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733318550/Personalised_Instant_sgqygm.png"
          />
          <img
            className="landindpage-banner-two-second-img"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732376271/orderismore_cnfg8z.png"
          />
          <div className="orderingmore">
            <img
              className="landindpage-banner-two-third-img"
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732376271/personal_szm1lh.png"
            />
          </div>
          <p>Download the Order.uk app for faster ordering</p>
          <img
            className="landindpage-banner-two-fourth-img"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732031402/app-store-badges-en_1_q2pevh.jpg"
          />
        </div>
      </div>

      <div className="landingpage-partnership">
        <div className="landingpage-partnership-Partner-with-us">
          <div className="gradient"></div>
          <div className="upper-div">Earn more with lower fees</div>
          <p>Signup as a business</p>
          <h1>Partner with us</h1>
          <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732383935/partner_mm1nzm.png" />
        </div>
        <div className="landingpage-partnership-Ride-with-us">
          <div className="gradient"></div>
          <div className="upper-div">Avail exclusive perks</div>
          <p>Signup as a rider</p>
          <h1>Ride with us</h1>
          <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732383941/ride_kaw93n.png" />
        </div>
      </div>
      <div className="landingpage-knowwmore">
        <div className="landingpage-knowwmore-main">
          <div className="landingpage-knowwmore-link">
            <div className="Know-more-about-us">Know more about us!</div>
            <div className="Frequent-Questions">
              <p>Frequent Questions</p>
            </div>
            <div className="Who-we-are">
              <p>Who we are</p>
            </div>
            <div className="Partner-Program">
              <p>Partner Program</p>
            </div>
            <div className="Help-Support">
              <p>Help & Support</p>
            </div>
          </div>
          <div className="landingpage-knowwmore-details">
            <div className="landingpage-knowwmore-details-left">
              <div className="landingpage-knowwmore-how-dose-work">
                How does Order.UK work?
              </div>
              <p>What payment methods are accepted?</p>
              <p>Can I track my order in real-time?</p>
              <p>
                Are there any special discounts or <br></br>promotions
                available?
              </p>
              <p>Is Order.UK available in my area?</p>
            </div>
            <div className="landingpage-knowwmore-details-right">
              <div className="landingpage-knowwmore-details-right-upper">
                <div className="landingpage-knowwmore-details-right-upper-span"></div>
                <div className="landingpage-knowwmore-details-right-upper-monitoring">
                  <div className="Place-an-Order">
                    <h1>Place an Order! </h1>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732455394/order-food_1_z1jyvo.png" />
                    <p>
                      Place order through our<br></br> website or Mobile app
                    </p>
                  </div>
                  <div className="Track-Progress">
                    <h1>Track Progress </h1>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732455393/food_1_bnvca9.png" />
                    <p>
                      Your can track your order<br></br> status with delivery
                      time
                    </p>
                  </div>
                  <div className="Get-your-Order">
                    <h1> Track Progress</h1>
                    <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732455393/order_1_vctv03.png" />
                    <p>
                      Receive your order at a <br></br> lighting fast speed!{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="landingpage-knowwmore-details-right-lower">
                <p>
                  Order.UK simplifies the food ordering process. Browse through
                  our diverse menu,<br></br> select your favorite dishes, and
                  proceed to checkout. Your delicious meal will be<br></br> on
                  its way to your doorstep in no time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landingpage-statestic">
        <div className="landingpage-statestic-main">
          <div className="landingpage-statestic-container">
            <h1>546+</h1>
            <p>Registered Riders</p>
          </div>
          <div className="landingpage-statestic-container">
            <h1>789,900+</h1>
            <p> Orders Delivered</p>
          </div>
          <div className="landingpage-statestic-container">
            <h1>690+ </h1>
            <p>Restaurants Partnered</p>
          </div>
          <div className="landingpage-statestic-container">
            <h1>17,457+</h1>
            <p> Food items</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage