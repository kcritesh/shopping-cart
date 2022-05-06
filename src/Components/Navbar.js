import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ setShow, size }) {
  return (
    <>
      <div className="navbar">
        <div className="navitems">
          <h2
            className="title"
            onClick={() => {
              setShow(true);
            }}
          >
            Hello Store
          </h2>
          <div className="cart-section">
            <span
              onClick={() => {
                setShow(false);
              }}
            >
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </div>
    </>
  );
}
