import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import FamilyDetailsFormField from "./FamilyDetailsFormField";

const FamilyDetailsFormIterativeFields = (props) => {
  const [formFields, setFormFields] = useState([{ name: "", age: "" }]);
  const addFields = () => {
    let newField = { name: "", age: "" };
    setFormFields([...formFields, newField]);
    props.onChange(formFields);
  };
  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    props.onChange(data);
  };
  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
    props.onChange(data);
  };
  return (
    <div>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <div>{props.name}</div>
        {props.maxCount > formFields.length && (
          <Button variant="link" onClick={addFields}>
            Add New {props.name}
          </Button>
        )}
      </div>
      {formFields.map((input, index) => (
        <FamilyDetailsFormField
          fieldData={input}
          key={index}
          index={index}
          handleFormChange={handleFormChange}
          removeFields={removeFields}
        />
      ))}
    </div>
  );
};

export default FamilyDetailsFormIterativeFields;
