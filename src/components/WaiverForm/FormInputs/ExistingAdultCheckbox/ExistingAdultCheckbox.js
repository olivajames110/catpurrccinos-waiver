import { FormControlLabel, Radio } from "@mui/material";
import React from "react";
import { formatDob } from "../../../../utils/helpers/formatDob";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
// import './ExistingAdultCheckbox.css'

const ExistingAdultCheckbox = (props) => {
  const onChangeHandler = () => {
    console.log("EXISTING ADULTTTTTTTTTTTTTTT", props.adult);
    const state = {
      id_: props.adult.id_,
      firstName: props.adult.firstName,
      lastName: props.adult.lastName,
      email: props.adult.email,
      dob: props.adult.dob,
    };

    console.log("changing");
    props.setIsSelected(true);
    props.onChange(state);
  };

  const newAdultChangeHandler = () => {
    props.onChange(false);
  };
  const existingAdultCheckbox = (
    <>
      <FormControlLabel
        value={props.adult.id_}
        control={<Radio onChange={onChangeHandler} />}
        label={`${props.adult.firstName} ${props.adult.lastName}`}
      />
      <div className="radio-selection-input-details">
        <div className="input-detail-item">{props.adult.email}</div>
        <div className="input-detail-item">{props.adult.dob}</div>
      </div>
    </>
  );

  const newAdultCheckbox = (
    <>
      <FormControlLabel
        control={<Radio onChange={newAdultChangeHandler} />}
        label={`Add New Adult`}
      />
    </>
  );
  return (
    <div className="existing-adult-component-container">
      <div className="radio-selection-input-container">
        {props.newAdult ? newAdultCheckbox : existingAdultCheckbox}
      </div>
    </div>
  );
};
export default ExistingAdultCheckbox;
