import { useEffect } from "react";
import "./time.css";

const Time = () => {
  //date
  const date = new Date();

  //check if number is less than 10 for prefix 0 e.g 01 02 03 etc
  const validateDigit = (digit) => {
    return digit < 10 ? `0${digit}` : digit;
  };

  const getDate = () => {
    // array of months in string form
    const arrMonth = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Semptember",
      "October",
      "November",
      "December",
    ];
    //get day, month and year
    const day = validateDigit(date.getDate());
    const month = arrMonth[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  // current time format
  const getTime = () => {
    return (
      validateDigit(date.getHours()) + ":" + validateDigit(date.getMinutes())
    );
  };

  return (
    <div className="time-container">
      <h2 className="date"> {getDate()} </h2>
      <h2> {getTime()} </h2>
    </div>
  );
};

export default Time;
