const waiverFormStateReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FORM_STATE":
      return action.payload.state;

    case "CLEAR_FORM_STATE":
      return [];

    case "ADD_NEW_USER":
      return [
        ...state,
        {
          id_: action.payload.id_,
          isAdult: action.payload.isAdult,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          dob: action.payload.dob,
          email: action.payload.email,
          consentIsSigned: action.payload.consentIsSigned,
          parentGuardian: action.payload.parentGuardian,
        },
      ];

    case "REMOVE_PREVIOUS_USER":
      return [...state].slice(0, -1);

    default:
      return state;
  }
};

export default waiverFormStateReducer;
