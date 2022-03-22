import React from "react";
import DatePickerComponent from "../../../FormInputs/DatePicker/DatePicker";
import FormGroup from "../../../FormGroup/FormGroup";
import Textbox from "../../../FormInputs/Textbox/Textbox";

const AdultInfoSection = (props) => {
  return (
    <FormGroup title="Your Information">
      <Textbox
        // error={formState.firstName}
        onChange={props.updateStateHandler}
        keyName="firstName"
        label="First Name"
        value={props.firstName}
        error={props.error}
      />
      <Textbox
        // error={formState.lastName}
        onChange={props.updateStateHandler}
        keyName="lastName"
        label="Last Name"
        value={props.lastName}
        error={props.error}
      />
      <DatePickerComponent
        onChange={props.updateStateHandler}
        keyName="dob"
        label="Date of Birth"
        placholder="mm/dd/yyyy"
        value={props.dob}
        isAdult
        setFormIsValid={props.setFormIsValid}
        error={props.error}
      />
      <Textbox
        // error={formState.email}
        onChange={props.updateStateHandler}
        keyName="email"
        label="Email Address"
        value={props.email}
        error={props.error}
      />
    </FormGroup>
  );
};
export default AdultInfoSection;
