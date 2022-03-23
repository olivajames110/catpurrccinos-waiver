import React, { useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import TextOverflow from "../../Shared/TextOverflow/TextOverflow";
import FormCard from "../FormCard/FormCard";

import { useDispatch, useSelector } from "react-redux";
import { setParticipants } from "../../../redux/actions/waiverParticipantsReducerActions";
import ParticipantRadioSelection from "./Components/Participants/ParticipantRadioSelection";
import { increaseFormStep } from "../../../redux/actions/formStepActions";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import { getFilteredList } from "../../../utils/helpers/getFilteredList";

const waiverParticipantsInitState = {
  adults: [],
  minors: [],
  allParticipants: [],
};
const Participants = (props) => {
  //Component state
  const [showError, setShowError] = useState(false);

  //Redux
  const waiverParticipants = useSelector((state) => state.waiverParticipants);
  const dispatch = useDispatch();

  //Functions
  const nextHandler = () => {
    if (waiverParticipants.length > 0) {
      setShowError(false);
      props.onClickNextHandler();
    } else {
      setShowError(true);
    }
  };

  let adultUpdateHandler = (num) => {
    let number = Number(num);
    let adultArray = [...Array(number)].map((el, index) => ({
      isAdult: true,
      orderNum: index + 1,
    }));

    let filteredMinorArray = getFilteredList(
      waiverParticipants,
      "isAdult",
      false
    );

    let allParticipants = [...adultArray, ...filteredMinorArray];

    dispatch(setParticipants(allParticipants));
  };

  let minorUpdateHandler = (num) => {
    let number = Number(num);
    let minorArray = [...Array(number)].map((el, index) => ({
      isAdult: false,
      orderNum: index + 1,
    }));

    let filteredAdultArray = getFilteredList(
      waiverParticipants,
      "isAdult",
      true
    );

    let allParticipants = [...filteredAdultArray, ...minorArray];

    dispatch(setParticipants(allParticipants));
  };

  return (
    <FormCard
      title="Participants"
      currentStep={props.currentStep}
      onClickNext={nextHandler}
      show={props.show}
      directionIsToLeft={props.directionIsToLeft}
    >
      <TextOverflow style={{ marginTop: "10px" }} height={160}>
        <p>
          I hereby certify that I am over eighteen (18) years of age, and am of
          sound mind at the time of the execution of this Waiver, Release, Hold
          Harmless, and Indemnification Agreement (hereinafter “Release”) and
          agree to the terms and conditions of this document.&nbsp; If I am
          agreeing to this waiver on behalf of a minor I agree that references
          throughout to “I” or “me” apply to myself and the minor. I am
          aware&nbsp;that my signature acknowledging all agreements is valid
          from date of signature, up to and including&nbsp;any and all future
          entries&nbsp;to Catpurrccinos Cat Cafe. &nbsp;&nbsp;
        </p>
        <p>
          Catpurrccinos Cat Café has available certain cats and/or kittens to be
          played with by customers at the establishment and agrees to allow me
          to play with same in consideration of both the payment of the fees for
          same and my execution of this Release and agreeing to be bound by its
          terms.
        </p>
        <p>
          I am aware of and fully understand the inherent dangers involved in
          playing with cats and/or kittens, including the risk of death and/or
          personal injury or damage to myself, other persons, my property,
          and/or the property of others while participating in such activities
          or having my property at the site of such activities. I further
          acknowledge that participants in such activities and other person
          involved in these activities may not be covered under insurance of
          Catpurrccinos and that customers of Catpurrccinos may not have any
          right to file a claim against Catpurrccinos insurance policy.&nbsp;
        </p>
        <p>
          I freely and voluntarily execute this Release with such knowledge, and
          assume full and sole responsibility for the risk of death, personal
          injury and/or property loss arising from or in any way connected with
          my participation in the activities provided by Catpurrccinos.
        </p>
        <p>
          I agree to abide by all rules and regulations that Catpurrccinos may
          impose regarding the cats and/or kittens. I agree to follow all rules
          and to undertake all activities in a responsible manner. IF I AM
          UNWILLING OR UNABLE TO FOLLOW ANY RULES, CATPURRCCINOS WILL TERMINATE
          MY CONTINUATION OF SUCH ACTIVITIES, AND I WILL NOT BE ENTITLED TO ANY
          REFUND OF OUR FEES.
        </p>
        <p>
          I acknowledge that playing with cats and/or kittens may not be
          supervised, and Catpurrccinos staff will not be with me the entire
          time I am in contact with the cats and/or kittens, but Catpurrccinos
          staff will remain on the premises to monitor the activity of all
          current participants, offer guidance and encouragement, and be
          available to assist in the event of participant difficulty.
        </p>
        <p>
          I have no physical or emotional issue(s), including, but not limited
          to, any allergies, which would adversely affect my ability to play
          with the cats and/or kittens in a safe and appropriate manner.
        </p>
        <p>&nbsp;</p>
        <p>
          I agree not to engage in any activity that will injure or otherwise
          hurt the cats and/or kittens in any manner.
        </p>
        <p>
          I hereby release and forever discharge Catpurrccinos, their respective
          agents, owners, employees, and independent contractors, and their
          respective sureties, insurers, successors, assigns, and legal
          representatives, from any liability, claim, cause of action, demand
          and damages for injury, death or damages of any kind or nature
          whatsoever to myself or my property as a result of my engaging in any
          activities at Catpurrccinos, including, but not limited to, playing
          with the cats and/or kittens, whether such injury, death, or property
          damage is caused by the intentional or negligent act or omission on
          the part of (i), any other customer of Catpurrccinos, (ii) any
          employee, agent, owners, or independent contractor of Catpurrccinos,
          or (iii) any other person at Catpurrccinos. Furthermore, I agree to
          pay any and all attorney's fees and costs of the Catpurrccinos, and
          any of their respective agents, employees, owners, and independent
          contractors if Ing any action, claim, or demand against Catpurrccinos,
          or any of their respective agents, employees, owners and independent
          contractors for any reason for which this Release applies.
        </p>
        <p>
          I agree to defend with counsel chosen by the indemnified party,
          indemnify, and hold harmless Catpurrccinos, their respective agents,
          employees, owners, and independent contractors, their sureties,
          insurers, successors, assigns, and legal representatives from any
          liability, claim, cause of action, demand or damages for injury, death
          or damages of any kind or nature whatsoever to any person or their
          property resulting from any actual or claimed intentional or wrongful
          act or omission by me arising from or as a result of my presence at
          Catpurrccinos or my participation in any activities at Catpurrccinos.
          I agree to provide said defense and indemnity regardless of the merit
          of the claim.
        </p>
        <p>
          I agree to and hereby bind my heirs, executors, assigns and all other
          legal representatives by executing this Release.
        </p>
        <p>
          I hereby acknowledge and agree that this Release is intended to be
          construed and interpreted asad and inclusive as permitted by the laws
          of Huntington, NY. If any portion of this Release is found or declared
          to be invalid or unenforceable, such invalidity shall not affect the
          remainder of this Release not found to be invalid and the remainder of
          this Release shall remain in full force and effect.&nbsp; This
          Agreement shall be governed by the laws of Huntington, NY (without
          regard to the laws that might be applicable under principles of
          conflicts of law, and without regard to the jurisdiction in which any
          action or special proceedings may be instituted), as to all matters,
          including but not limited to matters of jurisdiction, validity,
          property rights, construction, effect and performance. All disputes
          shall be subject to litigation only within the courts of Huntington,
          NY.
        </p>
        <p>
          BY EXECUTING THIS RELEASE, I ACKNOWLEDGE THAT I HAVE READ THIS
          RELEASE, UNDERSTAND THE CONTENTS HEREOF, HAVE BEEN ADVISED AND HAD THE
          OPPORTUNITY TO SEEK INDEPENDENT COUNSEL OF MY CHOICE AND CERTIFY THAT
          I HAVE FREELY AND VOLUNTARILY EXECUTED THIS RELEASE. I ACKNOWLEDGE
          THAT, BUT FOR THE EXECUTION OF THIS RELEASE AND AGREEING TO BE BOUND
          BY THE TERMS HEREOF, CATPURRCCINOS WOULD NOT AUTHORIZE ME TO
          PARTICIPATE IN ANY ACTIVITIES AT CATPURRCCINOS.
        </p>
      </TextOverflow>
      <Box
        className="participant-label"
        sx={{
          fontSize: "18px",
          lineHeight: "1.8em",
          fontWeight: "600",
          color: "var(--gray)",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        Who is this waiver for?
      </Box>

      <Grid
        sx={{
          maxWidth: "700px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        container
        columns={{ xs: 4, md: 12 }}
      >
        <Grid sx={{ marginTop: "40px", marginBottom: "0px" }} item xs={6}>
          <ParticipantRadioSelection
            label={"Adult(s)"}
            subLabel={"Guests 18 years old & older."}
            selectLabel="Adults"
            onChange={adultUpdateHandler}
          />
        </Grid>

        <Grid sx={{ marginTop: "40px", marginBottom: "0px" }} item xs={6}>
          <ParticipantRadioSelection
            label={"Minor(s)"}
            subLabel={"Under the age of 18 years old."}
            selectLabel="Minors"
            onChange={minorUpdateHandler}
          />
        </Grid>
      </Grid>
      {showError && (
        <ErrorMessage text={"Please choose the number of Adults and Minors"} />
      )}
    </FormCard>
  );
};
export default Participants;
