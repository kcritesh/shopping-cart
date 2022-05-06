import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

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
  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Shop handleAddtoCart={handleAddtoCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
}

export default App;
