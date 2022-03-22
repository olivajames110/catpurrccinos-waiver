export const increaseFormStep = (user) => {
  return {
    type: "INCREASE_FORM_STEP",
  };
};

export const decreaseFormStep = () => {
  return {
    type: "DECREASE_FORM_STEP",
  };
};

export const resetFormStep = () => {
  return {
    type: "RESET_FORM_STEP",
  };
};
