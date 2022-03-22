const formStepReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREASE_FORM_STEP":
      return state + 1;
    case "DECREASE_FORM_STEP":
      return state - 1;
    case "RESET_FORM_STEP":
      return 0;
    default:
      return state;
  }
};
export default formStepReducer;
