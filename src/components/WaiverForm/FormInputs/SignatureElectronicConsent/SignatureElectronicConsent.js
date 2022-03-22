import React, { useEffect, useState } from "react";
import "./SignatureElectronicConsent.css";
import TextOverflow from "../../../Shared/TextOverflow/TextOverflow";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

const SignatureElectronicConsent = (props) => {
  return (
    <div className="signature-electronic-consent-container">
      <TextOverflow height={props.height || 120}>
        <p>
          By checking here, you are consenting to the use of your electronic
          signature in lieu of an original signature on paper. You have the
          right to request that you sign a paper copy instead. By checking here,
          you are waiving that right. After consent, you may, upon written
          request to us, obtain a paper copy of an electronic record. No fee
          will be charged for such copy and no special hardware or software is
          required to view it. Your agreement to use an electronic signature
          with us for any documents will continue until such time as you notify
          us in writing that you no longer wish to use an electronic signature.
          There is no penalty for withdrawing your consent. You should always
          make sure that we have a current email address in order to contact you
          regarding any changes, if necessary.
        </p>
      </TextOverflow>

      <CheckboxInput
        keyName={props.keyName}
        value={props.value}
        onChange={props.onChange}
        label="I agree to Electronic Signature Consent"
        error={props.error}
      />
    </div>
  );
};
export default SignatureElectronicConsent;
