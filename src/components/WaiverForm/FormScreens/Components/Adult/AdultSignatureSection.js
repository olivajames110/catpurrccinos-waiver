import React from "react";
import FormGroup from "../../../FormGroup/FormGroup";
import SignatureAgreement from "../../../FormInputs/SignatureAgreement/SignatureAgreement";

const AdultSignatureSection = (props) => {
  return (
    <FormGroup title="Agreement">
      <SignatureAgreement
        firstName={props.firstName}
        lastName={props.lastName}
        height={100}
      />
    </FormGroup>
  );
};
export default AdultSignatureSection;
