import React from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = ({ selectedPlan }) => {
  return (
    <div>
      <h2>Thank you for your purchase!</h2>
      <p>Your health insurance plan:</p>
      <p>Name: {selectedPlan.name}</p>
      <p>Price: ${selectedPlan.price}</p>
      <Link to="/home">Back to Home</Link>
    </div>
  );
};

export default CheckoutSuccess;
