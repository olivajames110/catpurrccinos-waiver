import React, { useEffect, useState } from "react";
import Textbox from "../Textbox/Textbox";
import MuiPhoneNumber from "material-ui-phone-number";
import "./PhoneNumberInput.css";
import { FormHelperText } from "@mui/material";
const PhoneNumberInput = (props) => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleOnChange = (value) => {
    console.log(value);
    props.onChange(props.keyName, value);
  };
  useEffect(() => {
    // handleChange();
    // handleChange();
    console.log("Valid is changed");
    if (props.error && props.value === "") {
      setIsValid(false);
    }

    setValue(props.value);
  }, [props.error, props.value]);
  return (
    <div className="component-container">
      {/* <Textbox
        onChange={props.onChange}
        keyName="emergencyContactNumber"
        label="Emergency Contact Number"
        placholder="Emergency Contact Number"
        value={props.value}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      /> */}
      <MuiPhoneNumber
        variant="outlined"
        size="medium"
        fullWidth
        defaultCountry={"us"}
        onChange={handleOnChange}
        label={props.label}
        value={value}
        required
        error={props.error && props.value === ""}
      />
    </div>
  );
};
export default PhoneNumberInput;
