import { useState, useCallback, useRef, useEffect } from "react";

export const useFormatDate = () => {
  const getParsedMonth = (fullDate) => {
    console.log(fullDate);
    // let m = fullDate;
    if (fullDate !== null) {
      let m = fullDate.split(" ")[0];
      return m;
    }
  };
  const getParsedDay = (fullDate) => {
    console.log(fullDate);
    if (fullDate !== null) {
      let d = fullDate.split(" ")[1].slice(0, -1);
      return d;
    }
  };
  const getParsedYear = (fullDate) => {
    console.log(fullDate);
    if (fullDate !== null) {
      let y = fullDate.split(" ")[2];
      console.log("GetParsed Year", y);
      return y;
    }
  };

  return {
    getParsedMonth,
    getParsedDay,
    getParsedYear,
  };
};
