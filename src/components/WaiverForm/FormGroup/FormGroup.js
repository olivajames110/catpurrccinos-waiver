import React from "react";
import "./FormGroup.css";
const FormGroup = (props) => {
  return (
    <div style={props.formGroupStyles} className="form-group-container">
      <div style={props.titleStyles} className="form-group__title">
        {props.title}{" "}
      </div>
      <div className="form-group__body">{props.children}</div>
    </div>
  );
};
export default FormGroup;
