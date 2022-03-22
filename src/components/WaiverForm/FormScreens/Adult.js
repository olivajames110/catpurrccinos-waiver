import React, { useEffect, useState } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import FormCard from "../FormCard/FormCard";

import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../../redux/actions/waiverFormStateActions";
import { adultInitState } from "../../../config/initState/adultInitState";
import { addParentGuardian } from "../../../redux/actions/parentGuardianListActions";

import AdultSignatureConsentSection from "./Components/Adult/AdultSignatureConsentSection";
import AdultSignatureSection from "./Components/Adult/AdultSignatureSection";
import AdultInfoSection from "./Components/Adult/AdultInfoSection";
import AdultTestButton from "./Components/Adult/AdultTestButton";

// import './Participants.css'

const Adult = (props) => {
  //Component state
  const [formState, setFormState] = useState(adultInitState);
  const [error, setError] = useState(false);

  //Redux
  const waiverParticipants = useSelector((state) => state.waiverParticipants);
  const currentStep = useSelector((state) => state.formStep);
  const dispatch = useDispatch();

  //Mui screen sizing
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  //Functions
  const updateStateHandler = (key, value) => {
    const state = {
      ...formState,
      id_: formState.id_ === "" ? uuidv4() : formState.id_,
      [key]: value,
    };
    setFormState(state);
  };

  const nextHandler = () => {
    //Checks if valid
    let formIsValid = true;
    let keys = Object.keys(formState);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = formState[key];
      if (value === false || value === "") {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      dispatch(addUser(formState));
      let parentGuardianState = {
        id_: formState.id_,
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        dob: formState.dob,
      };
      dispatch(addParentGuardian(parentGuardianState));
      setError(false);
      props.handleNext();
    } else {
      setError(true);
      console.log("More Info Required");
    }
  };

  const backButtonHandler = () => {
    props.handleBack();
  };

  useEffect(() => {
    if (currentStep === 0) {
      setFormState(adultInitState);
    }
  }, [formState, currentStep]);

  return (
    <FormCard
      title={`Adult Information`}
      isAdult
      onClickBack={backButtonHandler}
      onClickNext={nextHandler}
      show={props.show}
      orderNum={props.orderNum}
      totalNum={waiverParticipants.adults.length}
      directionIsToLeft={props.directionIsToLeft}
    >
      <AdultTestButton onClick={setFormState} />
      <Grid container columns={{ xs: 4, md: 12 }} spacing={isSmall ? 0 : 6}>
        <Grid item xs={6}>
          <AdultInfoSection
            updateStateHandler={updateStateHandler}
            firstName={formState.firstName}
            lastName={formState.lastName}
            dob={formState.dob}
            email={formState.email}
            error={error}
          />
        </Grid>
        <Grid item xs={6}>
          <AdultSignatureSection
            firstName={formState.firstName}
            lastName={formState.lastName}
            error={error}
          />
          <AdultSignatureConsentSection
            updateStateHandler={updateStateHandler}
            consentIsSigned={formState.consentIsSigned}
            error={error}
          />
        </Grid>
      </Grid>
    </FormCard>
  );
};

export default Adult;
