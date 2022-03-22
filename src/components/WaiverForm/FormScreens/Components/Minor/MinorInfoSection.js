import React from "react";

import DatePickerComponent from "../../../FormInputs/DatePicker/DatePicker";
import FormGroup from "../../../FormGroup/FormGroup";
import PhoneNumberInput from "../../../FormInputs/PhoneNumberInput/PhoneNumberInput";
import Textbox from "../../../FormInputs/Textbox/Textbox";

const MinorInfoSection = (props) => {
  return (
    <FormGroup title="Minor's Information">
      <Textbox
        onChange={props.updateStateHandler}
        keyName="firstName"
        label="First Name"
        value={props.formState.firstName}
        error={props.error}
      />
      <Textbox
        onChange={props.updateStateHandler}
        keyName="lastName"
        label="Last Name"
        value={props.formState.lastName}
        error={props.error}
      />
      <DatePickerComponent
        onChange={props.updateStateHandler}
        keyName="dob"
        label="Date of Birth"
        placholder="mm/dd/yyyy"
        value={props.formState.dob}
        error={props.error}
      />
      <PhoneNumberInput
        onChange={props.newAdultHandler}
        keyName="emergencyContactNumber"
        label="Emergency Contact Number"
        placholder="Emergency Contact Number"
        value={props.formState.parentGuardian.emergencyContactNumber}
        error={props.error}
      />
    </FormGroup>
  );
};
export default MinorInfoSection;
