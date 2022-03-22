import React from "react";

import Adult from "./FormScreens/Adult";
import Minor from "./FormScreens/Minor";

import { useSelector } from "react-redux";

const FormScreenCardsContainer = (props) => {
  //Redux
  const currentStep = useSelector((state) => state.formStep);

  return (
    <>
      {props.allParticipants.map((p, i) => {
        if (p.isAdult) {
          return (
            <Adult
              key={i}
              show={currentStep === i + 1}
              currentStep={currentStep}
              orderNum={p.orderNum}
              handleNext={props.onClickNextHandler}
              handleBack={props.onClickBackHandler}
              directionIsToLeft={props.directionIsToLeft}
            />
          );
        } else {
          return (
            <Minor
              key={i}
              show={currentStep === i + 1}
              currentStep={currentStep}
              orderNum={p.orderNum}
              handleNext={props.onClickNextHandler}
              handleBack={props.onClickBackHandler}
              directionIsToLeft={props.directionIsToLeft}
            />
          );
        }
      })}
    </>
  );
};
export default FormScreenCardsContainer;
