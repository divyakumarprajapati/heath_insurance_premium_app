import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FamilyDetailsForm from "../family_details_form/FamilyDetailsForm";
import PremiumPlan from "../premium_plan/PremiumPlan";

const HomePage = () => {
  return (
    <Row>
      <Col>
        <FamilyDetailsForm />
      </Col>
      <Col>
        <PremiumPlan />
      </Col>
    </Row>
  );
};

export default HomePage;
