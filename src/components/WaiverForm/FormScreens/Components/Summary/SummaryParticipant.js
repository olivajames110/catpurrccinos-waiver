import React from "react";
import "./SummaryParticipant.css";

const SummaryParticipant = (props) => {
  //Names
  const adultSignature = `${props.participant.firstName} ${props.participant.lastName}`;
  const minorSignature = `${props.participant.parentGuardian.firstName} ${props.participant.parentGuardian.lastName}`;

  //Components
  const minorInfo = (
    <>
      <div className="summary__detail-item">
        Date of Birth: {props.participant.dob}
      </div>
      <div className="summary__detail-item">
        Parent/Guardian: {props.participant.parentGuardian.firstName}{" "}
        {props.participant.parentGuardian.lastName}
      </div>
    </>
  );
  const adultInfo = (
    <>
      <div className="summary__detail-item">
        Date of Birth: {props.participant.dob}
      </div>
      <div className="summary__detail-item">
        Email Address: {props.participant.email}
      </div>
    </>
  );
  return (
    <div
      className={`summary-participant-container ${
        !props.participant.isAdult && "minor"
      }`}
    >
      <div className="summary-details">
        <div className="summary__title">
          {props.participant.firstName} {props.participant.lastName}
          <span className="age-type">
            {props.participant.isAdult ? "Adult" : "Minor"}
          </span>{" "}
        </div>
        {props.participant.isAdult ? adultInfo : minorInfo}
      </div>
      <div className="summary-signature">
        {!props.participant.isAdult && (
          <div className="parent-guardian">
            Signing on behalf of {props.participant.firstName}{" "}
            {props.participant.lastName}:
          </div>
        )}
        <div className="signature">
          {props.participant.isAdult ? adultSignature : minorSignature}
        </div>
      </div>
    </div>
  );
};
export default SummaryParticipant;
