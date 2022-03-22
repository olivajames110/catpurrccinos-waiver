import React from "react";

import ProgressBarLine from "../ProgressBarLine/ProgressBarLine";
import ProgressBarStep from "../ProgressBarStep/ProgressBarStep";

import "./ProgressBarItem.css";

const ProgressBarItem = (props) => {
  const standardLayout = (
    <>
      <ProgressBarStep
        isActive={props.isActive}
        isCompleted={props.isCompleted}
        labelText={props.labelText}
        isAdult={props.isAdult}
        orderNum={props.orderNum}
        summary={props.summary}
      />
      <ProgressBarLine
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      />
    </>
  );
  const AdultCompact = (
    <>
      <ProgressBarStep
        orderNum={props.orderNum}
        isCompact={props.isCompact || false}
        isActive={props.isActive}
        isCompleted={props.isCompleted}
        labelText={props.labelText}
        isAdult={props.isAdult}
        participantNumber={props.participantNumber}
      />
      <ProgressBarLine
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      />
    </>
  );
  const MinorCompact = (
    <>
      <ProgressBarStep
        orderNum={props.orderNum}
        isActive={props.isActive}
        isCompact={props.isCompact || false}
        isCompleted={props.isCompleted}
        labelText={props.labelText}
        isAdult={props.isAdult}
        participantNumber={props.participantNumber}
      />
      <ProgressBarLine
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      />
    </>
  );

  const compactLayout = props.isAdult ? AdultCompact : MinorCompact;
  return (
    <div
      className={`progress-bar-item-container ${
        props.isLastChild && "last-child"
      }`}
    >
      {!props.isCompact && standardLayout}
      {props.isCompact && compactLayout}
    </div>
  );
};
export default ProgressBarItem;
