import React, { useState } from "react";
import PremiumPlanTable from "../premium_plan/PremiumPlanTable";
import { useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";

const CheckoutForm = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const state = useSelector((state) => state.premiumReducer);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit();
  };
  return (
    <div xs="6">
      <h1>Health Insurance Checkout</h1>
      <PremiumPlanTable premium={state.premium} />
      <Form className="mx-4" onSubmit={onSubmit}>
        <Form.Group className="mb-1 justify-content-start">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-1  justify-content-start">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Button type="submit">PAY</Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;
