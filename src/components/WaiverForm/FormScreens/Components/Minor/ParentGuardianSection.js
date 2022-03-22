import React, { useEffect, useState } from "react";
import FormGroup from "../../../FormGroup/FormGroup";
import ParentGuardianExistingAdult from "./ParentGuardianExistingAdult";
import ParentGuardianNewAdult from "./ParentGuardianNewAdult";
import { parentGuardianInitState } from "../../../../../config/initState/parentGuardianInitState";
import { useSelector } from "react-redux";

const ParentGuardianSection = (props) => {
  //Redux
  const parentGuardianList = useSelector((state) => state.parentGuardianList);

  //Functions
  const addNewAdultButtonHandler = () => {
    props.existingAdultHandler(parentGuardianInitState, true);
    props.setNewAdultIsActive(true);
  };

  const backButtonHandler = () => {
    props.existingAdultHandler(parentGuardianInitState, true);
    props.setNewAdultIsActive(false);
  };

  //Components
  const backButton = (
    <button
      onClick={backButtonHandler}
      id="back"
      className="form-group-inner-button"
    >
      <div className="icon-wrapper">{leftArrow}</div>
      <span>Back</span>
    </button>
  );

  const newAdultButton = (
    <button
      className="form-group-inner-button"
      onClick={addNewAdultButtonHandler}
    >
      <div className="icon-wrapper">{plus}</div>
      <span> Add New Parent/Guardian</span>
    </button>
  );

  useEffect(() => {
    parentGuardianList.length === 0
      ? props.setNewAdultIsActive(true)
      : props.setNewAdultIsActive(false);
  }, [parentGuardianList]);

  return (
    <FormGroup
      title={
        props.newAdultIsActive
          ? "New Parent/Guardian For Minor"
          : "Select Parent/Guardian For Minor"
      }
    >
      {parentGuardianList.length >= 1 && props.newAdultIsActive && backButton}
      {props.newAdultIsActive ? (
        <ParentGuardianNewAdult
          updateStateHandler={props.updateStateHandler}
          newAdultHandler={props.newAdultHandler}
          formState={props.formState}
          error={props.error}
        />
      ) : (
        <ParentGuardianExistingAdult
          existingAdultHandler={props.existingAdultHandler}
          list={props.list}
          newAdultIsActive={props.newAdultIsActive}
          activeAdultId={props.formState.parentGuardian.id_}
          error={props.error}
        />
      )}
      {parentGuardianList.length >= 1 &&
        !props.newAdultIsActive &&
        newAdultButton}
    </FormGroup>
  );
};
export default ParentGuardianSection;
const leftArrow = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z" />
  </svg>
);

const plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
