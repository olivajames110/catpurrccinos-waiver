import React from "react";
import "./ProgressBarLine.css";

const ProgressBarLine = (props) => {
  return (
    <div
      className={`progress-bar-line-container ${
        props.isCompleted && "is-active"
      }`}
    >
      <div className="line-fill"></div>
    </div>
  );
};
export default ProgressBarLine;
