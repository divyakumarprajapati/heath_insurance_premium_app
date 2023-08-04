import React, { useState } from "react";
import CheckoutForm from "../checkout/CheckoutForm";
import CheckoutSuccess from "../checkout/CheckoutSuccess";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

const CheckoutPage = () => {
  const [purchaseSuccessful, setPurchaseSuccessful] = useState(false);
  const handleSubmit = () => {
    setPurchaseSuccessful(true);
  };
  const state = useSelector((state) => state.premiumReducer);

  return (
    <Row className="justify-content-center mx-5">
      <Col xs={6}>
        {purchaseSuccessful ? (
          <CheckoutSuccess
            selectedPlan={{
              name: state.checkoutPremium.membersPremium[0].name,
              price: state.checkoutPremium.total,
            }}
          />
        ) : (
          <CheckoutForm handleSubmit={handleSubmit} />
        )}
      </Col>
    </Row>
  );
};

export default CheckoutPage;
