import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import FormInputWrapper from "../FormInputWrapper/FormInputWraper";
// import "./Select.css";

const SelectInput = (props) => {
  const [value, setValue] = useState(props.value | "");
  const handleChange = (event) => {
    setValue(event.target.value);
    props.handleOnChange(event.target.value);
  };
  return (
    <FormInputWrapper>
      <FormControl fullWidth>
        <InputLabel id="select-label">{`${value} Total ${props.label}`}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={value}
          label={`${value} Total ${props.label}`}
          onChange={handleChange}
        >
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
    </FormInputWrapper>
  );
};
export default SelectInput;
