import React from "react";
import { Box } from "@mui/material";

import FormCard from "../FormCard/FormCard";
import SummaryParticipant from "./Components/Summary/SummaryParticipant";

import { useSelector } from "react-redux";

const Summary = (props) => {
  //Redux
  const waiverFormState = useSelector((state) => state.waiverFormState);

  return (
    <FormCard
      title="Summary"
      numberOfParticipants={props.numberOfParticipants}
      currentStep={props.currentStep}
      onClickNext={props.handleNext}
      onClickBack={props.handleBack}
      nextButtonText={"Submit Waiver"}
      show={props.show}
      directionIsToLeft={props.directionIsToLeft}
    >
      <Box
        sx={{
          display: "flex",
          fontWeight: "500",
          color: "var(--gray)",
          flexWrap: "wrap",
        }}
      >
        {waiverFormState.map((p) => (
          <SummaryParticipant participant={p} />
        ))}
      </Box>
    </FormCard>
  );
};

export default Summary;
