const initState = {
  adults: [],
  minors: [],
  allParticipants: [],
};
const waiverParticipantsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_WAIVER_PARTICIPANTS":
      return action.payload;

    case "CLEAR_WAIVER_PARTICIPANTS":
      return [];
    default:
      return state;
  }
};

export default waiverParticipantsReducer;
