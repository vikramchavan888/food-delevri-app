import React, { useEffect } from "react";
import {  Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Landingpage from "./pages/Landingpage";
import MacD from "./pages/MacD";
import Kfc from "./pages/Kfc";
import Texaschicken from "./pages/Texaschicken";
import Papajohns from "./pages/Papajohns";
import Bgking from "./pages/Bgking";
import Shaurmaone from "./pages/Shaurmaone";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ManageAddress from "./pages/ManageAddress";
import UpdateProfile from "./pages/UpdateProfile";
import { useSelector } from "react-redux";
import Checkout from "./pages/Checkout";
import SharedCart from "./components/SharedCart";
import Paymentpage from "./pages/Paymentpage";
import Orderplaced from "./pages/Orderplaced";
function App() {

  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn);

  useEffect(()=>{
    if( isLoggedIn=== false){
        navigate("/login");
    }
  },[]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Landingpage />} />
          <Route path="/macd" element={<MacD />} />
          <Route path="/kfc" element={<Kfc />} />
          <Route path="/texasc" element={<Texaschicken />} />
          <Route path="/papajohns" element={<Papajohns />} />
          <Route path="/burgerk" element={<Bgking />} />
          <Route path="/shaurma" element={<Shaurmaone />} />
        </Route>

        <Route path="/cart/:cartId" element={<SharedCart />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/payment" element={<Paymentpage />} />
        <Route path="/OrderSuccessful" element={<Orderplaced />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/manage-address" element={<ManageAddress />} />
      </Routes>
    </div>
  );
}

export default App;
