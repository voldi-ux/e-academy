/** @format */
import "./error.css";
import errorImg from "../../resources/images/error.png";

const ErrorBox = ({ message, severity, buttonClick }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img src={errorImg} alt="error image" />
              <h1>{message}</h1>
              <button onClick={buttonClick} className="error-button">
                  Acknowledged
              </button>
      </div>
    </div>
  );
};

export default ErrorBox;
