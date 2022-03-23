import React, { useEffect, useState } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";
import Participants from "./FormScreens/Participants";
import Summary from "./FormScreens/Summary";
import Success from "./FormScreens/Success";
import FormScreenCardsContainer from "../WaiverForm/FormScreenCardsContainer";

import { useSelector, useDispatch } from "react-redux";
import {
  decreaseFormStep,
  increaseFormStep,
  resetFormStep,
} from "../../redux/actions/formStepActions";
import {
  clearFormState,
  removePreviousUser,
} from "../../redux/actions/waiverFormStateActions";
import { clearParticipants } from "../../redux/actions/waiverParticipantsReducerActions";
import {
  clearParentGuardians,
  removePreviousParentGuardian,
} from "../../redux/actions/parentGuardianListActions";

import "./WaiverForm.css";

const WaiverForm = (props) => {
  //Component state
  const [successIsActive, setSuccessIsActive] = useState(false);
  const [directionIsToLeft, setDirectionIsToLeft] = useState(false);

  //Redux
  const currentStep = useSelector((state) => state.formStep);
  const participants = useSelector((state) => state.waiverParticipants);
  const dispatch = useDispatch();

  //Functions
  const onClickNextHandler = () => {
    if (!directionIsToLeft) {
      setDirectionIsToLeft(true);
    }

    console.log("Next");
    dispatch(increaseFormStep());
    document.querySelector("#root").scrollTo(0, 0);
  };

  const onClickBackHandler = () => {
    if (directionIsToLeft) {
      setDirectionIsToLeft(false);
    }

    dispatch(decreaseFormStep());
    if (currentStep === 0) {
      resetHandler();
    }

    dispatch(removePreviousUser());
    dispatch(removePreviousParentGuardian());

    document.querySelector("#root").scrollTo(0, 0);
  };

  const submitFormHandler = () => {
    console.log("Submit Form");
    onClickNextHandler();
    setSuccessIsActive(true);
  };

  const resetHandler = () => {
    dispatch(clearFormState());
    dispatch(resetFormStep());
    dispatch(clearParticipants());
    dispatch(clearParentGuardians());
    setSuccessIsActive(false);
  };

  //Waiver Cards -- Not sure if best way of organizing
  const progressBar = (
    <>
      {currentStep !== 0 && (
        <ProgressBar
          currentStep={currentStep}
          allParticipants={participants.allParticipants}
          adultParticipants={participants.adults}
          minorParticipants={participants.minors}
          successIsActive={successIsActive}
        />
      )}
    </>
  );

  const participantCard = (
    <>
      <Participants
        show={currentStep === 0}
        currentStep={currentStep}
        onClickNextHandler={onClickNextHandler}
        directionIsToLeft={directionIsToLeft}
      />
    </>
  );

  const adultAndMinorCards = (
    <>
      {participants.allParticipants.length > 0 && (
        <FormScreenCardsContainer
          allParticipants={participants.allParticipants}
          onClickNextHandler={onClickNextHandler}
          onClickBackHandler={onClickBackHandler}
          directionIsToLeft={directionIsToLeft}
        />
      )}
    </>
  );

  const summaryCard = (
    <>
      <Summary
        show={currentStep === participants.allParticipants.length + 1}
        currentStep={currentStep}
        numberOfParticipants={participants.allParticipants}
        handleNext={submitFormHandler}
        handleBack={onClickBackHandler}
        directionIsToLeft={directionIsToLeft}
      />
    </>
  );
  const successCard = (
    <>
      <Success
        show={currentStep === participants.allParticipants.length + 2}
        handleNext={resetHandler}
        directionIsToLeft={directionIsToLeft}
        numberOfParticipants={participants.allParticipants}
      />
    </>
  );

  // useEffect(() => {
  //   if (participants.allParticipants.length >= 1) {
  //     onClickNextHandler();
  //   }
  // }, [participants]);

  useEffect(() => {
    if (currentStep === 0 && participants.allParticipants.length >= 1) {
      resetHandler();
    }
  }, [currentStep]);

  return (
    <>
      {progressBar}
      <section className="waiver-form-container">
        <div className="waiver-form-inner-wrapper">
          {participantCard}
          {adultAndMinorCards}
          {summaryCard}
          {successCard}
        </div>
      </section>
    </>
  );
};
export default WaiverForm;
