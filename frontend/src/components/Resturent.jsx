import React from 'react'
import { Link } from "react-router-dom";
import "./Resturent.css";
import { useState, useEffect } from "react";
import { handleError } from "../utils";
import { ToastContainer } from "react-toastify";

const Resturent = () => {
const [data, setData] = useState([]);

const fetchResturent = async () => {
  try {
    const url = "http://localhost:3000/getResturent";
    const headers = {
      headers: { Authorization: localStorage.getItem("jwttoken") },
    };
    const response = await fetch(url, headers);
    const result = await response.json();
    setData(result);
  } catch (err) {
    handleError(err);
  }
};

  useEffect(() => {
    fetchResturent();
  }, []);
  return (
    <>
      <div className="Popular-Restaurants">
        <h2>Popular Restaurants</h2>

        <div className="resturent-Navigation">
          {data.map((item,i) => (
            <Link
              style={{ textDecoration: "none", color: "none" }}
              to={item.link}
              key={i}
              className="resturents"
            >
              <div className="resturentimg">
                <img src={item.img} />
              </div>
              <div className="resturentname">{item.name}</div>
            </Link>
          ))}
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default Resturent