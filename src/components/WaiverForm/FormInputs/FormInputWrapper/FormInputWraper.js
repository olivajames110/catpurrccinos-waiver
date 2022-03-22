import React from "react";
import "./FormInputWraper.css";
const FormInputWraper = (props) => {
  return <div className="form-input-wrapper">{props.children}</div>;
};
export default FormInputWraper;
