import React from "react";
import "./ProgressBarStep.css";

const ProgressBarStep = (props) => {
  const ageText = props.isAdult ? "Adult" : "Minor";
  const labelText = props.labelText ? props.labelText : ageText;
  const ageIcon = props.isAdult ? adultIcon : minorIcon;
  const iconType = props.summary ? summaryIcon : ageIcon;

  const normalLabel = (
    <>
      <span>
        {labelText}
        {props.orderNum && ` #${props.orderNum}`}
      </span>
    </>
  );

  const compactLabel = (
    <>
      <span>
        {labelText} ({props.participantNumber})
      </span>
    </>
  );
  return (
    <div
      className={`progress-bar-step-container ${
        props.isActive && "is-active"
      } ${props.isCompleted && "is-completed"}`}
    >
      <div className="progress-bar-step__circle">
        <div className="icon-wrapper">
          {props.isCompleted ? check : iconType}
        </div>
      </div>
      <div className="progress-bar-step__label">
        {props.isCompact ? compactLabel : normalLabel}
      </div>
    </div>
  );
};
export default ProgressBarStep;

const adultIcon = (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120.46 149.37"
  >
    <g id="Adult">
      <circle cx="60.23" cy="32.54" r="32.54" />
      <path
        d="M160.21,159.92a60,60,0,0,1-1.71,14.28h-117a60.24,60.24,0,1,1,118.75-14.28Z"
        transform="translate(-39.75 -24.83)"
      />
    </g>
  </svg>
);
const minorIcon = (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 186.53 149.37"
  >
    <g id="Minor">
      <circle cx="60.23" cy="32.54" r="32.54" />
      <path
        d="M97.79,174.2H8.42a60.24,60.24,0,0,1,113.75-38.34q-2,1.3-3.94,2.79A54.1,54.1,0,0,0,97.79,174.2Z"
        transform="translate(-6.71 -24.83)"
      />
      <path
        d="M193.24,174.2H109.82a42.09,42.09,0,0,1,83.42,0Z"
        transform="translate(-6.71 -24.83)"
      />
      <circle cx="144.82" cy="79.44" r="22.95" />
    </g>
  </svg>
);

const check = (
  <svg
    className="checkmark"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={36}
  >
    <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path>
  </svg>
);
const summaryIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path d="M336 64h-53.88C268.9 26.8 233.7 0 192 0S115.1 26.8 101.9 64H48C21.5 64 0 85.48 0 112v352C0 490.5 21.5 512 48 512h288c26.5 0 48-21.48 48-48v-352C384 85.48 362.5 64 336 64zM96 392c-13.25 0-24-10.75-24-24S82.75 344 96 344s24 10.75 24 24S109.3 392 96 392zM96 296c-13.25 0-24-10.75-24-24S82.75 248 96 248S120 258.8 120 272S109.3 296 96 296zM192 64c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S160 113.7 160 96C160 78.33 174.3 64 192 64zM304 384h-128C167.2 384 160 376.8 160 368C160 359.2 167.2 352 176 352h128c8.801 0 16 7.199 16 16C320 376.8 312.8 384 304 384zM304 288h-128C167.2 288 160 280.8 160 272C160 263.2 167.2 256 176 256h128C312.8 256 320 263.2 320 272C320 280.8 312.8 288 304 288z" />
  </svg>
);
