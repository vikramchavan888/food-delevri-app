import React, { useEffect, useState } from "react";
import "./Foodlist.css";
import { useCart } from "../context/CartContext";

const Foodlist = ({ searchTerm }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState({});
  const { dispatch } = useCart();

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/getFooditems");
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

console.log("Search Term: ", searchTerm);
console.log("Filtered Items: ", filteredItems);

  return (
    <>
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
                  <div className="foodlist-category-item-info-description">
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
    </>
  );
};

export default Foodlist;
