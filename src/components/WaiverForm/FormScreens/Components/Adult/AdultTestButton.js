import React from "react";
import TestButton from "../../../../Shared/TestButton/TestButton";
import { v4 as uuidv4 } from "uuid";

const AdultTestButton = (props) => {
  const adultuser = [
    {
      id_: uuidv4(),
      isAdult: true,
      firstName: "Jimmy",
      lastName: "Oliva",
      dob: "November 10, 1992",
      email: "olivajames110@gmail.com",
      consentIsSigned: true,
      parentGuardian: {},
    },
    {
      id_: uuidv4(),
      isAdult: true,
      firstName: "Carly",
      lastName: "Vitolo",
      dob: "April 9, 1994",
      email: "cvitolo@gmail.com",
      consentIsSigned: true,
      parentGuardian: {},
    },
    {
      id_: uuidv4(),
      isAdult: true,
      firstName: "Brittany",
      lastName: "Oliva",
      dob: "December 31, 1993",
      email: "brittany@gmail.com",
      consentIsSigned: true,
      parentGuardian: {},
    },
    {
      id_: uuidv4(),
      isAdult: true,
      firstName: "David",
      lastName: "Lilli",
      dob: "July 27, 1993",
      email: "david@gmail.com",
      consentIsSigned: true,
      parentGuardian: {},
    },
  ];
  const onClickHandler = () => {
    if (!props.isAdult) {
      const testFormState =
        adultuser[Math.floor(Math.random() * adultuser.length)];
      props.onClick(testFormState);
    }
  };
  return (
    <TestButton
      label="Test User"
      style={{ right: "10px" }}
      onClick={onClickHandler}
    />
  );
};
export default AdultTestButton;
