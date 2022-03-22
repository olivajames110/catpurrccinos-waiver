export const setFormState = (state) => {
  return {
    type: "SET_FORM_STATE",
    payload: state,
  };
};

export const clearFormState = () => {
  return {
    type: "CLEAR_FORM_STATE",
  };
};

export const addUser = (user) => {
  return {
    type: "ADD_NEW_USER",
    payload: user,
  };
};

export const removePreviousUser = () => {
  return {
    type: "REMOVE_PREVIOUS_USER",
  };
};
