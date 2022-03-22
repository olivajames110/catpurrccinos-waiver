import React from "react";

import { Grid } from "@mui/material";

import DatePickerComponent from "../../../FormInputs/DatePicker/DatePicker";
import SignatureAgreement from "../../../FormInputs/SignatureAgreement/SignatureAgreement";
import SignatureElectronicConsent from "../../../FormInputs/SignatureElectronicConsent/SignatureElectronicConsent";
import Textbox from "../../../FormInputs/Textbox/Textbox";

const ParentGuardianNewAdult = (props) => {
  return (
    <>
      <Grid container columns={{ xs: 4, md: 12 }} spacing={2}>
        <Grid item xs={6}>
          <Textbox
            onChange={props.newAdultHandler}
            keyName="firstName"
            label="First Name"
            value={props.formState.parentGuardian.firstName}
            error={props.error}
          />
        </Grid>
        <Grid item xs={6}>
          <Textbox
            onChange={props.newAdultHandler}
            keyName="lastName"
            label="Last Name"
            value={props.formState.parentGuardian.lastName}
            error={props.error}
          />
        </Grid>
      </Grid>
      <DatePickerComponent
        onChange={props.newAdultHandler}
        keyName="dob"
        label="Date of Birth"
        placholder="mm/dd/yyyy"
        value={props.formState.parentGuardian.dob}
        error={props.error}
        isAdult
      />
      <Textbox
        onChange={props.newAdultHandler}
        keyName="email"
        label="Email Address"
        value={props.formState.parentGuardian.email}
        error={props.error}
      />
      <SignatureAgreement
        firstName={props.formState.parentGuardian.firstName || ""}
        lastName={props.formState.parentGuardian.lastName || ""}
        height={100}
      />
      <SignatureElectronicConsent
        onChange={props.updateStateHandler}
        keyName="consentIsSigned"
        height={100}
        value={props.formState.consentIsSigned}
        error={props.error}
      />
    </>
  );
};
export default ParentGuardianNewAdult;
