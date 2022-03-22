export const formatDob = (date) => {
  const valueString = String(date).split(" ");
  const month = valueString[1];
  const day = valueString[2];
  const year = valueString[3];
  const dob = `${month} ${day}, ${year}`;
  return dob;
};
