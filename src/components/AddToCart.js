import React, { useContext } from "react";
import { CartContext } from "../context/Cart";
const AddToCart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((accum, currPrice) => {
    return accum + currPrice.priceNow;
  }, 0);
  return (
    <div className="cart">
      <h1>Favorite Product</h1>
      {cart &&
        cart.items.map((c, i) => {
          return (
            <li key={i}>
              {c.name} - {`$${c.priceNow}`}
            </li>
          );
        })}

      <div>
        <h2>Total</h2>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default AddToCart;
