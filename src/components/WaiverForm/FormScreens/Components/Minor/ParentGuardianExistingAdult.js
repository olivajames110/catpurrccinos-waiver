import React from "react";

import RadioSelection from "../../../FormInputs/RadioSelection/RadioSelection";

const ParentGuardianExistingAdult = (props) => {
  return (
    <RadioSelection
      onChange={props.existingAdultHandler}
      activeAdultId={props.activeAdultId}
      error={props.error}
      newAdultIsActive={props.newAdultIsActive}
      setShowExistingAdults={props.setShowExistingAdults}
    />
  );
};
export default ParentGuardianExistingAdult;
