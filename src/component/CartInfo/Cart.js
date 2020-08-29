import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const cart = props.cart;

  const totalPrice = cart.reduce((total, element) => total + element.price, 0);

  return (
    <div>
      <h2 className="order-summary">Order Summary: </h2>
      <p className="course-count">Number of course taken: {cart.length}</p>
      <p className="total-price">Total Price: {totalPrice}</p>
    </div>
  );
};

export default Cart;
