import { MenuItem, Select } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
const YearSelect = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let val = e.target.value;
    setValue(val);
    props.onChange(val);
    // props.handleSelectChange();
  };

  const year = new Date().getFullYear();

  useEffect(() => {
    console.log("Val", props.value);
    if (props.value !== null) {
      let month = props.value.split(" ")[2];
      setValue(month);
    }
  }, [props.value]);
  return (
    <Select
      id="year"
      className="custom-select year"
      value={value}
      displayEmpty
      onChange={handleChange}
    >
      <MenuItem disabled value="">
        <em>Year</em>
      </MenuItem>
      {[...Array(props.isAdult ? 100 : 18)].map((m, i) => (
        <MenuItem value={(props.isAdult ? year - 18 : year) - i}>
          {(props.isAdult ? year - 18 : year) - i}
        </MenuItem>
      ))}
    </Select>
  );
};
export default React.memo(YearSelect);
