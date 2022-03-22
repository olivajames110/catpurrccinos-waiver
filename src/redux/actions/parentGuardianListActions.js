export const addParentGuardian = (parentGuardian) => {
  return {
    type: "ADD_NEW_PARENT_GUARDIAN",
    payload: parentGuardian,
  };
};

export const removePreviousParentGuardian = () => {
  return {
    type: "REMOVE_PREVIOUS_PARENT_GUARDIAN",
  };
};

export const clearParentGuardians = () => {
  return {
    type: "CLEAR_PARENT_GUARDIANS",
  };
};
