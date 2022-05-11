import { React, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import jwt from "jsonwebtoken";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [cartHash, setCartHash] = useState("");

  const handleAddtoCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
    // const newCart = [...cart];
    // newCart.push(item);
    // setCart(newCart);
    console.log(item);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    setCartHash();
  }, [cart]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          index
          element={
            <>
              <Navbar size={cart.length} cartHash={cartHash} />

              <Shop handleAddtoCart={handleAddtoCart} />
            </>
          }
        />
        <Route
          path={`/cart/${cartHash}`}
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
              cartHash={cartHash}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
