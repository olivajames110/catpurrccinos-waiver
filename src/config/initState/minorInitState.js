import { v4 as uuidv4 } from "uuid";

export const minorInitState = {
  id_: "",
  isAdult: false,
  dob: "",
  firstName: "",
  lastName: "",
  email: false,
  consentIsSigned: false,
  parentGuardian: {
    id_: "",
    firstName: "",
    lastName: "",
    emergencyContactNumber: "",
    email: "",
    dob: "",
  },
};
