/** @format */

import { Link } from "react-router-dom";
import "./error.css";

export default function ErrorElement() {
  return (
    <div className="error-element-container">
          <p>oops, I don't think this is where you wanted to end up🤷‍♂️😎!!!</p>
          <Link to={"/"}>
              Click here to start afresh
          </Link>
    </div>
  );
}
