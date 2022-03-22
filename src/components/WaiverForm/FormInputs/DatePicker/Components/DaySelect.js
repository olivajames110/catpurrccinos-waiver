import { MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
const DaySelect = (props) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    let val = e.target.value;
    setValue(val);
    props.onChange(val);
    // props.handleSelectChange();
  };

  let daysInMonths = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  useEffect(() => {
    console.log("Val", props.value);
    if (props.value !== null) {
      let month = props.value.split(" ")[1].slice(0, -1);
      setValue(month);
    }
  }, [props.value]);
  return (
    <Select
      id="day"
      className="custom-select day"
      value={value}
      displayEmpty
      onChange={handleChange}
    >
      <MenuItem disabled value="">
        <em>Day</em>
      </MenuItem>
      {[...Array(daysInMonths[props.month || "January"])].map((m, i) => (
        <MenuItem value={i + 1}>{i + 1}</MenuItem>
      ))}
    </Select>
  );
};

export default DaySelect;
