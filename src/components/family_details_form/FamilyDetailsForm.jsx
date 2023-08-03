import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FamilyDetailsFormIterativeFields from "./FamilyDetailsFormIterativeFields";
import { useDispatch } from "react-redux";
import { fetchPremium } from "../../redux/action";

const FamilyDetailsForm = () => {
  const [childrenData, setChildrenData] = useState();
  const [adultData, setAdultData] = useState();
  const [insuredAmount, setInsuredAmount] = useState();
  const [cityTier] = useState();
  const [tenure] = useState();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPremium());
    console.log(childrenData, adultData, insuredAmount);
  };
  return (
    <Form className="mx-4" onSubmit={onSubmit}>
      <FamilyDetailsFormIterativeFields
        name="Adult"
        maxCount={2}
        fieldData={childrenData}
        onChange={(event) => setChildrenData(event)}
      />
      <FamilyDetailsFormIterativeFields
        name="Child"
        maxCount={4}
        fieldData={adultData}
        onChange={(event) => setAdultData(event)}
      />
      <Form.Group className="mb-1 d-flex justify-content-start">
        <Form.Label>Sum Insured</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={insuredAmount}
          onChange={(event) => {
            return setInsuredAmount(event.target.value);
          }}
        >
          <option>Select</option>
          <option value="1">300000</option>
          <option value="2">400000</option>
          <option value="3">500000</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1 d-flex justify-content-start">
        <Form.Label>City Tier</Form.Label>
        <Form.Select aria-label="Default select example" value={cityTier}>
          <option>Select</option>
          <option value="1">Tier1</option>
          <option value="2">Tier2</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1 d-flex justify-content-start">
        <Form.Label>Tenure</Form.Label>
        <Form.Select aria-label="Default select example" value={tenure}>
          <option>Select</option>
          <option value="1">1 yr</option>
          <option value="2">2 yr</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FamilyDetailsForm;
