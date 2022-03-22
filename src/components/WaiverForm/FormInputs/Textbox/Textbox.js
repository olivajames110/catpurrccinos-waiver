import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import FormInputWrapper from "../../FormInputs/FormInputWrapper/FormInputWraper";
import "./Textbox.css";
const Textbox = (props) => {
  const [value, setValue] = useState(null);
  const [isValid, setIsValid] = useState(true);
  const handleChange = (event) => {
    let val = event.target.value;
    if (val === "") {
      console.log("Not Valid");
      setIsValid(false);
    } else {
      console.log("Valid");
      setIsValid(true);
      setValue(val);
    }
    props.onChange(props.keyName, val, isValid);
  };

  // const checkIfValid = () => {
  //   if (value === "") {
  //     console.log("Not Valid");
  //     setIsValid(false);
  //   } else {
  //     console.log("Valid");
  //     setIsValid(true);
  //   }
  // };

  useEffect(() => {
    // handleChange();
    // handleChange();
    console.log("Valid is changed");
    if (props.error && props.value === "") {
      setIsValid(false);
    }
  }, [props.error, props.value]);

  return (
    <div className="text-box-wrapper">
      <FormInputWrapper>
        <TextField
          error={!isValid}
          variant="outlined"
          size="medium"
          fullWidth
          // focused={props.value ? props.value : value}
          // onBlur={checkIfValid}
          id="outlined-basic"
          label={props.label}
          onChange={handleChange}
          value={props.value}
          required
          InputLabelProps={{ shrink: props.value ? props.value : value }}
          inputProps={props.inputProps}
        />
      </FormInputWrapper>
    </div>
  );
};

export default Textbox;
