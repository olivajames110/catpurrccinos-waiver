export const getFilteredList = (array, value, isTrue) => {
  // console.log("START list", array, value, isTrue);
  let list;
  if (isTrue) {
    list = array.filter((p) => p[value] === true);
  } else {
    list = array.filter((p) => p[value] === false);
  }

  // console.log("END list", list);
  return list;
};
