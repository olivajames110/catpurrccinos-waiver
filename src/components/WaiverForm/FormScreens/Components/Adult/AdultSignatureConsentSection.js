import React from "react";
import FormGroup from "../../../FormGroup/FormGroup";
import SignatureElectronicConsent from "../../../FormInputs/SignatureElectronicConsent/SignatureElectronicConsent";

const AdultSignatureConsentSection = (props) => {
  return (
    <FormGroup title="Electronic Signature Consent">
      <SignatureElectronicConsent
        onChange={props.updateStateHandler}
        keyName="consentIsSigned"
        height={100}
        value={props.consentIsSigned}
        error={props.error}
      />
    </FormGroup>
  );
};
export default AdultSignatureConsentSection;
