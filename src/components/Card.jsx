import { useState } from "react";
import Items from "../food-data.js";
import React from "react";
import "../styles/Card.css";
import { IoIosPricetag } from "react-icons/io";

function Card({pizza}) {
  const [variant, setVariant] = useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="cards">
        <div className="card" >
          <img
            src={pizza.image}  width={200}
            alt=""
          />
          <h2>{pizza.name}</h2>
          <p>{pizza.description}</p>
          <div className="variants">
            <select
              name="variants"
              id="variants"
              onChange={(e) => setVariant(e.target.value)}
            >
              {pizza.variants.map((variant) => (
                <option value={variant}>{variant}</option>
              ))}
            </select>
            <select
              name="quantity"
              id="quantity"
              onChange={(e) => setQuantity(e.target.value)}
               >
              {[...Array(10).keys()].map((v, i) => (
                <option value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="bottom">
            <div className="addToCart">
              <button className="cart-btn">Add to Cart</button>
            </div>
            <div className="tag">
              <IoIosPricetag />
            </div>
            <div className="price">
              {<h3>${pizza.prices[0][variant] * quantity}/-</h3>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
