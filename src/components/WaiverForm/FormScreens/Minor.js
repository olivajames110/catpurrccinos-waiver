import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { minorInitState } from "../../../config/initState/minorInitState";
import { v4 as uuidv4 } from "uuid";

import FormCard from "../FormCard/FormCard";
import MinorInfoSection from "./Components/Minor/MinorInfoSection";
import ParentGuardianSection from "./Components/Minor/ParentGuardianSection";

import { useSelector, useDispatch } from "react-redux";
import { addUser } from "../../../redux/actions/waiverFormStateActions";
import { addParentGuardian } from "../../../redux/actions/parentGuardianListActions";

const Minor = (props) => {
  //Component state
  const [formState, setFormState] = useState(minorInitState);
  const [error, setError] = useState(false);
  const [adultList, setAdultList] = useState([]);
  const [newAdultIsActive, setNewAdultIsActive] = useState(true);

  //Redux
  const currentStep = useSelector((state) => state.formStep);
  const waiverFormState = useSelector((state) => state.waiverFormState);
  const waiverParticipants = useSelector((state) => state.waiverParticipants);
  const dispatch = useDispatch();

  //Functions
  const updateStateHandler = (key, value) => {
    const state = {
      ...formState,
      id_: formState.id_ === "" ? uuidv4() : formState.id_,
      [key]: value,
    };

    setFormState(state);
  };

  const existingAdultHandler = (parentGuardianState, isNewParentGuardian) => {
    // --modifies consentIsSigned and emergencyContactNumber, and then updates parentGuardian
    const previousState = {
      ...formState,
      consentIsSigned: isNewParentGuardian ? false : true,
    };

    const parentGuardian = {
      ...parentGuardianState,
      emergencyContactNumber: formState.parentGuardian.emergencyContactNumber,
    };

    const newState = {
      ...previousState,
      parentGuardian: { ...parentGuardian },
    };

    setFormState(newState);
  };

  const newAdultHandler = (key, value) => {
    const state = {
      ...formState.parentGuardian,
      id_:
        formState.parentGuardian.id_ === ""
          ? uuidv4()
          : formState.parentGuardian.id_,
      [key]: value,
    };
    updateStateHandler("parentGuardian", state);
  };

  const nextButtonHandler = () => {
    let formIsValid = true;

    const spreadState = { ...formState };
    delete spreadState.email;
    delete spreadState.isAdult;

    //Checks if valid
    let keys = Object.keys(spreadState);
    console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = spreadState[key];

      if (value === false || value === "") {
        formIsValid = false;
        break;
      }

      if (
        key === "parentGuardian" &&
        (spreadState.parentGuardian.id_ === "" ||
          spreadState.parentGuardian.firstName === "" ||
          spreadState.parentGuardian.lastName === "" ||
          spreadState.parentGuardian.email === "" ||
          spreadState.parentGuardian.dob === "" ||
          spreadState.parentGuardian.emergencyContactNumber === "")
      ) {
        formIsValid = false;
        break;
      }
      ///
    }
    if (formIsValid) {
      if (newAdultIsActive) {
        let newAdult = {
          id_: formState.parentGuardian.id_,
          firstName: formState.parentGuardian.firstName,
          lastName: formState.parentGuardian.lastName,
          email: formState.parentGuardian.email,
          dob: formState.parentGuardian.dob,
        };
        let newAdultList = [...adultList, newAdult];
        setAdultList(newAdultList);
        dispatch(addParentGuardian(newAdult));
        setNewAdultIsActive(false);
      }
      dispatch(addUser(formState));
      setError(false);
      props.handleNext();
    } else {
      setError(true);
      console.log("Info Required");
    }
  };

  const backButtonHandler = () => {
    props.handleBack();
  };

  useEffect(() => {
    if (currentStep === 0) {
      setFormState(minorInitState);
    }
    const filteredList = waiverFormState.filter((p) => p.isAdult);
    setAdultList(filteredList);
  }, [waiverFormState]);

  return (
    <FormCard
      title={`Minor  #${props.orderNum}`}
      show={props.show}
      isAdult={false}
      orderNum={props.orderNum}
      totalNum={waiverParticipants.minors.length}
      onClickBack={backButtonHandler}
      onClickNext={nextButtonHandler}
      directionIsToLeft={props.directionIsToLeft}
    >
      <Grid container columns={{ xs: 4, md: 12 }} spacing={6}>
        <Grid item xs={6}>
          <MinorInfoSection
            updateStateHandler={updateStateHandler}
            newAdultHandler={newAdultHandler}
            formState={formState}
            error={error}
          />
        </Grid>
        <Grid item xs={6}>
          <ParentGuardianSection
            updateStateHandler={updateStateHandler}
            newAdultHandler={newAdultHandler}
            existingAdultHandler={existingAdultHandler}
            list={adultList}
            activeAdultId={formState.parentGuardian.id_}
            formState={formState}
            setAdultList={setAdultList}
            waiverParticipants={waiverParticipants}
            error={error}
            newAdultIsActive={newAdultIsActive}
            setNewAdultIsActive={setNewAdultIsActive}
          />
        </Grid>
      </Grid>
    </FormCard>
  );
};
export default Minor;
