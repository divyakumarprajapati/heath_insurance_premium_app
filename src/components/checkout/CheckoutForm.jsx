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
    <div xs="6" className=" d-flex flex-column justify-content-start">
      <h3 className="my-3">Purchase Plan</h3>
      <PremiumPlanTable premium={state.premium} />
      <Form className="mx-5 py-3 px-3 bg-light rounded" onSubmit={onSubmit}>
        <Form.Group className="mb-1">
          <div className="d-flex justify-content-start">
            <Form.Label>Name:</Form.Label>
          </div>
          <Form.Control
            name="name"
            value={formData.name}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-1  justify-content-start">
          <div className="d-flex justify-content-start">
            <Form.Label>Email:</Form.Label>
          </div>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </Form.Group>
        <Button type="submit" className="my-3">
          PURCHASE
        </Button>
      </Form>
    </div>
  );
};

export default CheckoutForm;
