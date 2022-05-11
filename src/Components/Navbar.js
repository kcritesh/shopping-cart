import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({ setShow, size, cartHash }) {
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
            <Link to={`/cart/${cartHash}`}>
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </Link>

            <span>{size}</span>
          </div>
        </div>
      </div>
    </>
  );
}
