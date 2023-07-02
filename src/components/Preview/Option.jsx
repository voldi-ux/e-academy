import "./Preview.css";
import React from "react";

const Option = ({ answer }) => {
  return (
    <div className="option">
      <div>
        {" "}
        <input type="radio" name="radio" id="" />{" "}
      </div>
      <div> {answer}</div>
    </div>
  );
};

Option.defaultProps = {
  answer: "f(x) = 3x + 5",
};
export default Option;
