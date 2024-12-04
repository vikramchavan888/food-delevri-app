import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useAddress } from "../context/AddressContext"
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import "./ManageAddress.css";

const ManageAddress = () => {


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

  const { setSelectedAddress , selectedAddress} = useAddress();

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
  };

  const userId = localStorage.getItem("userId");

  const [addresses, setAddresses] = useState([]);
  const [showCardPopup, setShowCardPopup] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);




  // Fetch addresses on component mount or when the user changes
  useEffect(() => {
    if (user) {
      fetchAddresses();
    }
  }, [currentAddress]);

  const fetchAddresses = async () => {
    try {
      const response = await axios.get(
        `https://food-delevri-app.vercel.app/auth/addresses/${userId}`
      );
      setAddresses(response.data.addresses || []);
    } catch (error) {
      handleError("Error fetching addresses:", error);
    }
  };

  const handleSaveAddress = async () => {
    try {
      if (currentAddress._id) {
        // Update existing address
        await axios.put(
          `https://food-delevri-app.vercel.app/auth/update-address/${userId}/${currentAddress._id}`,
          currentAddress
        );
        setAddresses((prevAddresses) =>
          prevAddresses.map((address) =>
            address._id === currentAddress._id
              ? { ...address, ...currentAddress }
              : address
          )
        );
        handleSuccess("Address updated successfully");
      } else {
        // Add new address
        const response = await axios.post(
          `https://food-delevri-app.vercel.app/auth/add-address/${userId}`,
          currentAddress
        );
        setAddresses((prevAddresses) => [...prevAddresses, response.data]);
        handleSuccess("Address added successfully");
      }
      setShowCardPopup(false);
      setCurrentAddress(null);
    } catch (error) {
      handleError("Error saving address:", error);
    }
  };


  
  return (
    <>
      <Navbar />
      <div className="updateprofile-nav">
        <img
          className="updateprofile-order-img"
          src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
          alt="Order"
        />
        <div className="updateprofile-nav-links">
          <div className="updateprofile-nav-links-home">Home</div>
          <div className="updateprofile-nav-links-SpecialOffers">
            Special Offers
          </div>
          <div className="updateprofile-nav-links-Restaurants">Restaurants</div>
          <div className="updateprofile-nav-links-TrackOrder">Track Order</div>
          <div className="updateprofile-nav-links-login-signup">
            <img
              src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732345538/Male_User_w8tvn3.png"
              alt="User"
            />
            <p>{user.name}</p>
          </div>
        </div>
      </div>
      <h2
        onClick={() => navigate("/checkout")}
        className="manageaddress-My-Profile"
      >
        🡠 My Profile
      </h2>

      <div className="update-profile-container">
        <div className="updateprofile-cards-container">
          <div
            className="Add-New-address"
            onClick={() => {
              setCurrentAddress({
                phoneNumber: "",
                state: "",
                addressline: "",
                city: "",
                pincode: "",
              });
              setShowCardPopup(true);
            }}
          >
            <img src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733120035/Frame_100_1_ajg0qn.png" />
            <span>Add Address</span>
          </div>
          {addresses.map((address) => (
            <div
              key={address._id}
              onClick={() => handleSelectAddress(address)}
              className="updateprofile-address-item"
            >
              <div className="username-of-user">{user.name}</div>

              <div className="address-item-details">
                {address.addressline}
                <br></br>
                {address.state},{address.city}
                <br></br>
                {address.pincode}
              </div>

              <div className="address-item-phone">
                Phone number :{address.phoneNumber}
              </div>

              {selectedAddress?._id === address._id && (
                <span className="default-tag">Default</span>
              )}

              <div>
                <button
                  className="manageaddress-edit"
                  onClick={() => {
                    setCurrentAddress(address);
                    setShowCardPopup(true);
                  }}
                >
                  edit
                </button>
                <button
                  className="manageaddress-remove"
                  onClick={async () => {
                    try {
                      await axios.delete(
                        `https://food-delevri-app.vercel.app/auth/delete-address/${userId}/${address._id}`
                      );
                      setAddresses((prevAddresses) =>
                        prevAddresses.filter((item) => item._id !== address._id)
                      );
                      handleSuccess("Address deleted successfully");
                    } catch (error) {
                      handleError("Error deleting address:", error);
                    }
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {showCardPopup && (
          <div className="edit-address-popup">
            <div className="popup-content">
              <h3>{currentAddress?._id ? "Edit Address" : "Add Address"}</h3>
              <span>
                <label>Phone Number</label>
                <input
                  type="text"
                  value={currentAddress.phoneNumber}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </span>
              <span>
                <label>State</label>
                <input
                  type="text"
                  value={currentAddress.state}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      state: e.target.value,
                    })
                  }
                />
              </span>
              <span>
                <label>City</label>
                <input
                  type="text"
                  value={currentAddress.city}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      city: e.target.value,
                    })
                  }
                />
              </span>
              <span>
                <label>Pincode</label>
                <input
                  type="text"
                  value={currentAddress.pincode}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      pincode: e.target.value,
                    })
                  }
                />
              </span>
              <span>
                <label>Address Line</label>
                <input
                  type="text"
                  value={currentAddress.addressline}
                  onChange={(e) =>
                    setCurrentAddress({
                      ...currentAddress,
                      addressline: e.target.value,
                    })
                  }
                />
              </span>
            </div>
            <div className="update-profile-address-button">
              <button
                onClick={() => setShowCardPopup(false)}
                className="address-cancel-btn"
              >
                Cancel
              </button>
              <button onClick={handleSaveAddress} className="address-save-btn">
                {currentAddress?._id ? "Save Changes" : "Add Address"}
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ManageAddress;
