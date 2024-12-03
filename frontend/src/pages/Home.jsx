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
        <button onClick={handleLogout}>Logout</button>
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
