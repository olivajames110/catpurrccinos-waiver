export const setParticipants = (user) => {
  return {
    type: "SET_WAIVER_PARTICIPANTS",
    payload: user,
  };
};

export const clearParticipants = () => {
  return {
    type: "CLEAR_WAIVER_PARTICIPANTS",
  };
};
