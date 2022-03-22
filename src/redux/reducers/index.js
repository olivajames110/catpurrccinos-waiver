import waiverFormStateReducer from "./waiverFormStateReducer";
import formStepReducer from "./formStepReducer";
import waiverParticipantsReducer from "./waiverParticipantsReducer";
import parentGuardianListReducer from "./parentGuardianListReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  waiverFormState: waiverFormStateReducer,
  waiverParticipants: waiverParticipantsReducer,
  parentGuardianList: parentGuardianListReducer,
  formStep: formStepReducer,
});

export default rootReducer;
