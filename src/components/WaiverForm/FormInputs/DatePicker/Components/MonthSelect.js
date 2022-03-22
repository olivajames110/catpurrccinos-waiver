import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
const MonthSelect = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let val = e.target.value;
    console.log(val);
    setValue(val);
    props.onChange(val);
    // props.handleSelectChange();
  };

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    console.log("Val", props.value);
    if (props.value !== null) {
      let month = props.value.split(" ")[0];
      setValue(month);
    }
  }, [props.value]);
  return (
    <Select
      id="month"
      className="custom-select month"
      value={value}
      displayEmpty
      onChange={handleChange}
    >
      <MenuItem disabled value="">
        <em>Month</em>
      </MenuItem>

      {months.map((month) => (
        <MenuItem value={month}>{month}</MenuItem>
      ))}
    </Select>
  );
};

export default MonthSelect;
