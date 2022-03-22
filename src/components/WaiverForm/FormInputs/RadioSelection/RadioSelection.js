import React, { useEffect, useState } from "react";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import { useSelector } from "react-redux";
import "./RadioSelection.css";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import ExistingAdultCheckbox from "../ExistingAdultCheckbox/ExistingAdultCheckbox";
import ErrorMessage from "../../../Shared/ErrorMessage/ErrorMessage";
const RadioSelection = (props) => {
  const [isSelected, setIsSelected] = React.useState(false);
  //Redux
  const currentStep = useSelector((state) => state.formStep);
  const parentGuardianList = useSelector((state) => state.parentGuardianList);

  useEffect(() => {
    if (props.newAdultIsActive) {
      setIsSelected(false);
    }
  }, [props.newAdultIsActive]);

  return (
    <div className="radio-selection-wrapper">
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={props.activeAdultId}
        name="radio-buttons-group"
      >
        {parentGuardianList.map((p) => (
          <ExistingAdultCheckbox
            setIsSelected={setIsSelected}
            onChange={props.onChange}
            adult={p}
          />
        ))}
      </RadioGroup>

      {props.error && !isSelected && (
        <ErrorMessage text="Please select the adult signing on behalf of the minor." />
      )}
    </div>
  );
};
export default RadioSelection;
