import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FamilyDetailsFormIterativeFields from "./FamilyDetailsFormIterativeFields";
import { useDispatch } from "react-redux";
import { fetchPremium } from "../../redux/action";

const FamilyDetailsForm = (props) => {
  const [childrenData, setChildrenData] = useState([props.minCount === 1]);
  const [adultData, setAdultData] = useState([]);
  const [insuredAmount, setInsuredAmount] = useState();
  const [cityTier, setCityTier] = useState();
  const [tenure, setTenure] = useState();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const membersData = {
      members: [...adultData, ...childrenData],
      city_tier: cityTier,
      tenure: tenure,
      sum_insured: insuredAmount,
    };
    dispatch(fetchPremium(membersData));
  };
  return (
    <Form className="mx-4" onSubmit={onSubmit}>
      <FamilyDetailsFormIterativeFields
        name="Adult"
        key="adult"
        maxCount={2}
        minCount={1}
        min={18}
        max={90}
        placeholder="Age between 18-90"
        fieldData={childrenData}
        onChange={(event) => setChildrenData(event)}
      />
      <FamilyDetailsFormIterativeFields
        name="Child"
        key="child"
        maxCount={4}
        min={0}
        max={18}
        placeholder="Age between 0-18"
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
          required
        >
          <option value="">Select</option>
          <option value={300000}>300000</option>
          <option value={400000}>400000</option>
          <option value={500000}>500000</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1 d-flex justify-content-start">
        <Form.Label>City Tier</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={cityTier}
          onChange={(event) => {
            return setCityTier(event.target.value);
          }}
          required
        >
          <option value="">Select</option>
          <option value={1}>Tier1</option>
          <option value={2}>Tier2</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-1 d-flex justify-content-start">
        <Form.Label>Tenure</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={tenure}
          onChange={(event) => {
            return setTenure(event.target.value);
          }}
          required
        >
          <option value="">Select</option>
          <option value={1}>1 yr</option>
          <option value={2}>2 yr</option>
        </Form.Select>
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FamilyDetailsForm;
