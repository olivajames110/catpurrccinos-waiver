import React, { useEffect, useState } from "react";
import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { useSelector } from "react-redux";
const CheckboxInput = (props) => {
  const [checked, setChecked] = React.useState(false);
  //Redux
  const currentStep = useSelector((state) => state.formStep);
  const handleChange = (event) => {
    let val = event.target.checked;
    setChecked([val, val]);
    console.log(val);
    setChecked(val);
    props.onChange(props.keyName, val);
  };

  useEffect(() => {
    if (props.value) {
      setChecked(true);
    }
  }, [props.value, currentStep]);

  return (
    <>
      <FormControlLabel
        sx={{ fontSize: props.fontSize || "11px" }}
        control={
          <Checkbox checked={checked} size="small" sx={{ fontSize: 13 }} />
        }
        label={props.label}
        onChange={handleChange}
      />

      {props.error && !checked && (
        <FormHelperText sx={{ color: "var(--red)" }}>
          Please make sure you checked off the Electronic Consent!
        </FormHelperText>
      )}
    </>
  );
};
export default CheckboxInput;
