import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FormInputWrapper from "../FormInputWrapper/FormInputWraper";
import { MobileDatePicker } from "@mui/lab";
import { isMobile } from "react-device-detect";
import { formatDob } from "../../../../utils/helpers/formatDob";
import { MenuItem, Select } from "@mui/material";
import "./DatePicker.css";
import YearSelect from "./Components/YearSelect";
import DateSeparator from "./Components/DateSeparator";
import MonthSelect from "./Components/MonthSelect";
import DaySelect from "./Components/DaySelect";
import { useSelector } from "react-redux";
import { useFormatDate } from "../../../../hooks/format-date-hook";

const DatePickerComponent = (props) => {
  const [value, setValue] = React.useState(props.value || null);
  const [isOfAge, setIsOfAge] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);
  const [isActive, setIsActive] = React.useState(false);
  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState("");
  const [year, setYear] = React.useState("");
  const [fullDate, setFullDate] = React.useState(props.value || null);

  //Hook

  const { getParsedMonth, getParsedDay, getParsedYear } = useFormatDate();

  //Redux
  const currentStep = useSelector((state) => state.formStep);

  const handleChange = (newValue) => {
    console.log(newValue);
    // setValue(newValue);
  };

  const checkIfOfAge = (date, targetAge) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    let minUserAge = targetAge || 18;

    let year18ms = Date.parse(month + "/" + day + "/" + (year - minUserAge));
    let todaysDateMs = Date.now();
    let targetAgeMS = todaysDateMs - year18ms;

    let userAgeMS = todaysDateMs - Date.parse(date);

    if (userAgeMS >= targetAgeMS) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    if (props.error && props.value === "") {
      setIsValid(false);
    }
    if (props.value !== "") {
      setIsActive(true);
    }
    const dob = `${month} ${day}, ${year}`;
    // console.log("dob", dob, fullDate);
    // checkIfOfAge(18);
    // setFullDate(dob);
    // setMonth(month);
    // setDay(day);
    // setYear(year);

    if (month !== "" && day !== "" && year !== "") {
      console.log("All fields filled, checking if adult");
      if (props.isAdult) {
        console.log("Is Adult. Checking if over 18");
        let ageIsValid = checkIfOfAge(dob, 18);
        if (ageIsValid) {
          console.log("--- OF AGE ---");
          props.onChange(props.keyName, dob);
          setIsValid(true);
          setIsOfAge(true);
          // props.setFormIsValid(true);
        } else {
          console.log("--- NOT_OF_AGE ---");
          props.onChange(props.keyName, "");
          // props.setFormIsValid(false);
          setIsValid(false);
        }
      } else {
        props.onChange(props.keyName, dob);
        setIsOfAge(true);
        setIsValid(true);
      }
    }
  }, [month, day, year, props.error]);

  React.useEffect(() => {
    console.log("VALUEE", props.value);
    if (props.value !== "") {
      let m = getParsedMonth(props.value);
      let d = getParsedDay(props.value);
      let y = getParsedYear(props.value);
      setMonth(m);
      setDay(d);
      setYear(y);
    }
  }, [currentStep]);

  return (
    <FormInputWrapper>
      <div
        className={`custom-pseudo-wrapper ${
          !isValid && props.isAdult && "error"
        }`}
      >
        <TextField
          fullWidth
          variant="outlined"
          size="medium"
          id="outlined-basic"
          label={props.label}
          onChange={handleChange}
          onFocus={() => setIsActive(true)}
          value={""}
          focused={false}
          read
          required
          InputLabelProps={{ shrink: isActive ? true : false }}
          inputProps={props.inputProps}
          error={!isValid}
          helperText={
            !isValid && props.isAdult ? "You must be over 18." : false
          }
          InputProps={{
            readOnly: true,
          }}
        />
        {isActive && (
          <div className="select-buttons-wrapper">
            <MonthSelect value={value} onChange={setMonth} />
            <DateSeparator />
            <DaySelect value={value} month={month} onChange={setDay} />
            <DateSeparator />
            <YearSelect
              value={value}
              onChange={setYear}
              isAdult={props.isAdult}
            />
          </div>
        )}
      </div>
    </FormInputWrapper>
  );
};

export default DatePickerComponent;
