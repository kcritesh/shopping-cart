import React from "react";

export default function Card({ item, handleAddtoCart }) {
  const { title, author, price, img } = item;
  return (
    <>
      <div className="card mb-5" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ width: "150px", height: "200px", margin: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{author}</p>
          <p className="card-text card-text-price">${price}</p>

          <button
            className="btn btn-primary"
            onClick={() => handleAddtoCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
