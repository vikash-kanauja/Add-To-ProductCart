import React from "react";
import img from "../assets/img/img2.png";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { CartContext } from "../context/Cart";

const Cart = ({ name, priceBefore, priceNow }) => {
  const cart = useContext(CartContext);
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
      </div>
      <div className="card__name">
        <p>{name}</p>
      </div>
      <div className="card__precis">
        <div>
          <span className="card__preci card__preci--before">{`${priceBefore}`}</span>
          <span className="card__preci card__preci--now">{`${priceNow}`}</span>
        </div>
        <div
          onClick={() =>
            cart.setItems([
              ...cart.items,
              {
                name,
                priceNow,
              },
            ])
          }
        >
          <FiShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Cart;
