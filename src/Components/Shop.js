import React from "react";
import "./Shop.css";
import data from "../data";
import Card from "./Card";

export default function Shop({ handleAddtoCart }) {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row">
          {data.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <Card
                  key={index}
                  item={item}
                  handleAddtoCart={handleAddtoCart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
