import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import { CloseButton } from "react-bootstrap";

const FamilyDetailsFormField = (props) => {
  return (
    <Row className="d-flex flex-row align-items-center">
      <Col>
        <Form.Control
          name="name"
          placeholder="Name"
          value={props.name}
          onChange={(event) => {
            return props.handleFormChange(event, props.index);
          }}
          required
        />
      </Col>
      <Col>
        <Form.Control
          name="age"
          type="number"
          placeholder={props.placeholder}
          min={props.min}
          max={props.max}
          value={props.age}
          onChange={(event) => props.handleFormChange(event, props.index)}
          required
        />
      </Col>

      <Col xs={1}>
        {props.showDelete && (
          <CloseButton onClick={() => props.removeFields(props.index)} />
        )}{" "}
      </Col>
    </Row>
  );
};

export default FamilyDetailsFormField;
