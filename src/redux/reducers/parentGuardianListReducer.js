const parentGuardianListReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NEW_PARENT_GUARDIAN":
      return [...state, { ...action.payload }];
    case "REMOVE_PREVIOUS_PARENT_GUARDIAN":
      return [...state].slice(0, -1);
    case "CLEAR_PARENT_GUARDIANS":
      return [];
    default:
      return state;
  }
};

export default parentGuardianListReducer;
