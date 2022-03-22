const initState = {
  adults: [],
  minors: [],
  allParticipants: [],
};
const waiverParticipantsReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_WAIVER_PARTICIPANTS":
      return action.payload;

    case "CLEAR_WAIVER_PARTICIPANTS":
      return initState;
    default:
      return state;
  }
};

export default waiverParticipantsReducer;
