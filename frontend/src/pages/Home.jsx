import React, { useContext } from "react";
import "./Home.css";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/UserContext";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    
    localStorage.removeItem("jwttoken");
    localStorage.removeItem("userId");
    setUser(null); 
    window.location.reload();

    handleSuccess("User logged out successfully");
    setTimeout(() => navigate("/login"), 1000);
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
        <button className="logout" onClick={handleLogout}>
          <img
            className="logout-img"
            src="https://res.cloudinary.com/dlwpgtmcn/image/upload/v1733375213/logout-glassy-cyan-blue-round-button-isolated-abstract-illustration-97912713_epqqzh.jpg"
          />
        </button>
      </div>

      <div className="resturent-div">
        <Outlet />
      </div>
      <div className="Footer-content">
        <Footer />
        <ToastContainer />
      </div>
    </>
  );
};

export default Home;
