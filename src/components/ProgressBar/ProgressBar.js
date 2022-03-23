import React, { useEffect, useState } from "react";
import "./ProgressBar.css";

import ProgressBarItem from "./Components/ProgressBarItem/ProgressBarItem";
import { useSelector } from "react-redux";
const ProgressBar = (props) => {
  //Component state
  const [isCompact, setIsCompact] = useState(false);
  const [numOfAdults, setNumOfAdults] = useState(0);
  const [numOfMinors, setNumOfMinors] = useState(0);
  const [numOfAllParticipants, setNumOfAllParticipants] = useState(0);

  //Redux
  const currentStep = useSelector((state) => state.formStep);
  const waiverParticipants = useSelector((state) => state.waiverParticipants);

  useEffect(() => {
    if (props.allParticipants.length > 4) {
      setIsCompact(true);
    }

    setNumOfAdults(props.adultParticipants.length);
    setNumOfMinors(props.minorParticipants.length);
    setNumOfAllParticipants(props.allParticipants.length);
  }, [currentStep, props.adultParticipants, props.minorParticipants]);

  return (
    <div className="progress-bar-container">
      <ProgressBarItem
        isAdult={true}
        labelText={"Participants"}
        isActive={false}
        isCompleted={true}
        show={props.show}
      />

      {!isCompact &&
        props.allParticipants.map((p, i) => {
          if (p) {
            return (
              <ProgressBarItem
                key={i}
                orderNum={p.orderNum}
                currentStep={currentStep}
                stepNumber={i + 1}
                isAdult={p.isAdult}
                isActive={currentStep === i + 1 ? true : false}
                isCompleted={currentStep > i + 1 ? true : false}
              />
            );
          }
        })}

      {isCompact && numOfAdults > 0 && (
        <ProgressBarItem
          isCompact
          labelText={"Adults"}
          currentStep={currentStep}
          stepNumber={currentStep}
          isActive={currentStep <= numOfAdults ? true : false}
          isAdult={true}
          isCompleted={currentStep > numOfAdults ? true : false}
          participantNumber={numOfAdults}
        />
      )}
      {isCompact && numOfMinors > 0 && (
        <ProgressBarItem
          isCompact
          labelText={"Minors"}
          currentStep={currentStep}
          stepNumber={currentStep}
          isActive={currentStep > numOfAdults ? true : false}
          isAdult={false}
          isCompleted={currentStep >= numOfAllParticipants + 1 ? true : false}
          participantNumber={numOfMinors}
        />
      )}
      <ProgressBarItem
        isAdult={true}
        labelText={"Summary"}
        isActive={currentStep === props.allParticipants.length + 1}
        isCompleted={currentStep === props.allParticipants.length + 2}
        isLastChild
        summary
      />
    </div>
  );
};
export default ProgressBar;
