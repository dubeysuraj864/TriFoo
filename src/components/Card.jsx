import { useState } from "react";
import Items from "../food-data.js";
import React from "react";
import "../styles/Card.css";
import { IoIosPricetag } from "react-icons/io";

function Card() {

  const[variant, setVariant]=useState("small");
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="cards">
        {Items.map((pizza,key) => (
          <div className="card" key={key}>
            <img 
              src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
              width={200}
              alt=""
            />
            <h2 >{pizza.name}</h2>
            <p>
              {pizza.description}
            </p>
            <div className="variants">
              <select name="variants" id="variants">
                {
                  pizza.variants.map(variant => (
                    <option value={variant} onChange={e => e.target}>{variant}</option>
                  ))
                }
               
              </select>
              <select name="quantity" id="quantity">
                {
                [  ...Array(10).keys()].map((v,i) => (
                  <option value={i+1}>{i+1}</option>
                ) )
                }
               
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
                <h3>$55</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
