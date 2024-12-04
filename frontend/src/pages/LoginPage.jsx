import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { useState,useContext } from "react";
import Footer from "../components/Footer";
import { UserContext } from "../context/UserContext";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
const LoginPage = () => {
const { setUser } = useContext(UserContext);
 const [userlogininfo, setuserlogininfo] = useState({
   email: " ",
   password: " ",
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   //console.log(name, value);
   const copyuserlogininfo = { ...userlogininfo };
   copyuserlogininfo[name] = value;
   setuserlogininfo(copyuserlogininfo);
 };

 const navigate = useNavigate();

 const handlelogin = async (e) => {
   e.preventDefault();
   const { email, password } = userlogininfo;
   if (!email || !password) {
     return handleError(" email ,address and password are required");
   }
   try {
     const url = `https://food-delevri-app.vercel.app/auth/login`;
     const response = await fetch(url, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify(userlogininfo),
     });
     const result = await response.json();
     const { success, message, token,id, error,name } = result;
     if (success) {
       handleSuccess(message);
       localStorage.setItem("jwttoken", token);
       localStorage.setItem("userId", id);
       setUser({ name });
       setTimeout(() => {
         navigate("/ ");
       }, 1000);
     } else if (error) {
       const details = error?.details[0].message;
       handleError(details);
     } else if (!success) {
       handleError(message);
     }
     
   } catch (err) {
     handleError(err);
   }
 };
  return (
    <>
      <div className="main-container">
        <div className="upper-container">
          <div className="left-section">
            <form onSubmit={handlelogin} className="loginform">
              <img
                className="order-img"
                src="  https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021307/order_dbajjb.png"
              />
              <h2>
                Welcome Back &nbsp;
                <img
                  className="wave-img"
                  src=" https://res.cloudinary.com/dlwpgtmcn/image/upload/v1732021000/Screenshot_2_wpaq4v.png"
                />
              </h2>
              <p className="Today-is-a-new-day">
                Today is a new day. It's your day. You shape it. <br></br>Sign
                in to start ordering.
              </p>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  value={userlogininfo.email}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password..."
                  value={userlogininfo.password}
                />
              </div>
              <button type="submit" className="login-login-btn">
                Sign in
              </button>
            </form>
            <p class="login-text">
              Don't you have an account?
              <Link
                to="/signup"
                class="login-register-btn"
                style={{ textDecoration: "none" }}
              >
                Signup
              </Link>
            </p>
          </div>
          <div className="right-section">
            <img src="https://s3-alpha-sig.figma.com/img/be11/353a/02f4b1476ff7565a60acdccf6f4f0dce?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oane5q0bqrP7jffE2qGaWnS4TEgp4fFqUd8zFSsi4dPSqz7ozQ5Q9gCA2Lx6V~otCJpmgCUdvWVlMYQY60VWufaiA13EdJs43LurI97NrmudDkyG3sBdfYEZQHGTB4ft4G0hjgcqdSZ5p~RHeY6BRMFR594O7o5W~4jAqshg2K4L9JlpZtuYRlc3wL8EFf1a9waJ3n6DeFdR0q2yrNMbGpX~8pDb0g7NLp8MM7xxs1jtlz6TZ1GXvnw4zlscWfz1gQ39fy3-x-ODTzlG1vfQOxtiHD97wJBACFMOCIkZWTTos8GBG1-KCxfeycm5-5hQHDQI2-KFPnGdaf5Ft0hG4w__" />
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default LoginPage;
