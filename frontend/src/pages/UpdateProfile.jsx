import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"
import Navbar from "../components/Navbar";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "./UpdateProfile.css";

const UpdateProfile = () => {
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
  const userId = localStorage.getItem("userId");

  const [userInfo, setUserInfo] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    gender: user?.gender || "",
    country: user?.country || "",
  });

  const [isFocused, setIsFocused] = useState(false);

  const [cards, setCards] = useState([]);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  useEffect(() => {
    if (user) {
      fetchCards();
    }
  }, [user]);

  const fetchCards = async () => {
    try {
      const response = await axios.get(
        `https://food-delevri-app.vercel.app/auth/cards/${userId}`
      );
      setCards(response.data.cards);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

const handleSaveCard = async () => {
  try {
    if (currentCard._id) {
      // Update card
      await axios.put(
        `https://food-delevri-app.vercel.app/auth/update-card/${userId}/${currentCard._id}`,
        currentCard
      );
      setCards(
        cards.map((card) =>
          card._id === currentCard._id ? { ...card, ...currentCard } : card
        )
      );
      handleSuccess("Card updated successfully:", currentCard);
    } else {
      // Add card
      await axios.post(
        `https://food-delevri-app.vercel.app/auth/add-card/${userId}`,
        currentCard
      );
     handleSuccess("Card added successfully:", currentCard);
    }
    setShowCardPopup(false);
    setCurrentCard(null);
    fetchCards(); // Refresh the cards list
  } catch (error) {
    handleError("Error adding or updating card:", error);
 
  }
};

 const handleDeleteCard = async () => {
   try {
     if (currentCard?._id) {
       await axios.delete(
         `https://food-delevri-app.vercel.app/auth/delete-card/${userId}/${currentCard._id}`
       );
       setCards(cards.filter((card) => card._id !== currentCard._id));
       handleSuccess("Card deleted successfully:", currentCard);
     }
     setShowCardPopup(false);
     setCurrentCard(null);
   } catch (error) {
     handleError("Error deleting card:", error);
   }
 };

  const handleUserInfoUpdate = async () => {
    try {
      const response = await axios.put(
        `https://food-delevri-app.vercel.app/auth/${userId}`,
        userInfo
      );
      setUserInfo(response.data.data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  const handlefeildFocus = () => {
    setIsFocused(true);
  };

  const handlehandleBlur = () => {
    setIsFocused(false); 
  };

  return (
    <>
      <Navbar />
      <div className="updateprofile-nav">
        <img
          className="updateprofile-order-img"
          src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
        />

        <div className="updateprofile-nav-links">
          <div className="updateprofile-nav-links-home">Home</div>
          <div className="updateprofile-nav-links-SpecialOffers">
            Special Offers
          </div>
          <div className="updateprofile-nav-links-Restaurants">Restaurants</div>
          <div className="updateprofile-nav-links-TrackOrder">Track Order</div>
          <div className="updateprofile-nav-links-login-signup">
            <img src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png" />
            <p>{user.name}</p>
          </div>
        </div>
      </div>
      <h2 className="updateprofile-My-Profile">🡠 My Profile</h2>

      <div className="update-profile-container">
        <div className="user-info-form-upperdiv">
          <span>
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733073362/Ellipse_11_osiyje.png" />
            <h3>Hey {user.name}</h3>
          </span>
          <button onClick={handleUserInfoUpdate}>
            {isFocused ? "Save" : "Edit"}{" "}
          </button>
        </div>
        <div className="user-info-form-middlediv">
          <span>
            <label htmlFor="name">Name</label>
            <input
              className="userinput"
              placeholder="Name"
              value={userInfo.name}
              onChange={(e) =>
                setUserInfo({ ...userInfo, name: e.target.value })
              }
            />
          </span>
          <span>
            <label htmlFor="email">Email Address</label>
            <input
              className="userinput"
              placeholder="Enter the Email you want to update"
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              onFocus={handlefeildFocus}
              onBlur={handlehandleBlur}
            />
          </span>
        </div>
        <div className="user-info-form-loverdiv">
          <span>
            <label htmlFor="gender">Gender</label>
            <select
              className="userinput"
              value={userInfo.gender}
              onChange={(e) =>
                setUserInfo({ ...userInfo, gender: e.target.value })
              }
              onFocus={handlefeildFocus}
              onBlur={handlehandleBlur}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </span>
          <span>
            <label htmlFor="country">Country</label>
            <input
              className="userinput"
              placeholder="Country"
              value={userInfo.country}
              onChange={(e) =>
                setUserInfo({ ...userInfo, country: e.target.value })
              }
              onFocus={handlefeildFocus}
              onBlur={handlehandleBlur}
            />
          </span>
        </div>
        <h3>Saved Payment Methods</h3>
        <div className="updateprofile-cards-container">
          {cards.map((card) => (
            <div key={card._id} className="updateprofile-card-item">
              <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733115040/Frame_100_vdnvvt.png" />
              <span>
                <h5>xxxx xxxx xxxx {card.cardNumber.slice(-4)}</h5>
                <p>{card.cardHolderName}</p>
              </span>
              <img
                className="card-edit-button"
                onClick={() => {
                  setCurrentCard(card);
                  setShowCardPopup(true);
                }}
                src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733115314/Vector_1_edk77z.png"
              />
            </div>
          ))}
          <div
            className="Add-New-Card"
            onClick={() => {
              setCurrentCard({
                cardNumber: "",
                cardHolderName: "",
                expiryDate: "",
                cvv: "",
              });
              setShowCardPopup(true);
            }}
          >
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733120035/Frame_100_1_ajg0qn.png" />
            <span>Add New Card</span>
          </div>
        </div>

        {showCardPopup && (
          <div className="edit-card-popup">
            <div className="popup-content">
              <h3>
                {currentCard?._id
                  ? "Edit  Payment Method"
                  : "Add  Payment Method"}
              </h3>

              <span>
                <label htmlFor="cardnumber">Card Number</label>
                <input
                  className="cardinput"
                  type="text"
                  placeholder=" xxxx xxxx xxxx xxx"
                  value={currentCard.cardNumber}
                  onChange={(e) =>
                    setCurrentCard({
                      ...currentCard,
                      cardNumber: e.target.value,
                    })
                  }
                />
              </span>

              <span>
                <label htmlFor="cardHolderName">Name on Card</label>
                <input
                  className="cardinput"
                  type="text"
                  placeholder="Card Holder Name"
                  value={currentCard.cardHolderName}
                  onChange={(e) =>
                    setCurrentCard({
                      ...currentCard,
                      cardHolderName: e.target.value,
                    })
                  }
                />
              </span>
              <span>
                <label htmlFor="expiration">Expiration</label>
                <input
                  className="cardinput"
                  type="text"
                  placeholder="Expiry Date"
                  value={currentCard.expiryDate}
                  onChange={(e) =>
                    setCurrentCard({
                      ...currentCard,
                      expiryDate: e.target.value,
                    })
                  }
                />
              </span>
              <span>
                <label htmlFor="CVC">CVC</label>
                <input
                  className="cardinput"
                  placeholder="xxx"
                  value={currentCard.cvv}
                  onChange={(e) =>
                    setCurrentCard({ ...currentCard, cvv: e.target.value })
                  }
                />
              </span>
            </div>
            <div className="update-profile-card-button">
              {currentCard?._id && (
                <button onClick={handleDeleteCard} className="card-delete-btn">
                  Remove
                </button>
              )}
              <span>
                <button
                  onClick={() => setShowCardPopup(false)}
                  className="card-Cancel-btn"
                >
                  Cancel
                </button>
                <button onClick={handleSaveCard} className="card-save-btn">
                  {currentCard._id ? "Save Changes" : "Add Card"}{" "}
                </button>
              </span>
            </div>
          </div>
        )}
        <ToastContainer />
      </div>
      <Footer/>
    </>
  );
};

export default UpdateProfile;
