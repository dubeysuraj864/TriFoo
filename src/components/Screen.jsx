import { useState } from "react";
import Items from "../food-data.js";
import React from "react";
import "../styles/Card.css";
import { IoIosPricetag } from "react-icons/io";
import Card from "./Card.jsx";

function Screen() {
 
  return (
    <>
      <div className="cards">
        {Items.map((pizza, key) => (
          <>
          <Card pizza={pizza} />
          </>
        )
        
        )}
      </div>
    </>
  );
}

export default Screen;
