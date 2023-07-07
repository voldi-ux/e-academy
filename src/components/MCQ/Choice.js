import { useContext, useState } from "react";
import "./MCQ.css";
import { FaTrash, FaEdit, FaCircle } from "react-icons/fa";
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext";

function Choice({ option, currentEdit }) {
  const { dispatch } = useContext(questionEditorContext);

  const setAnswer = () => {
    dispatch({ type: "set-mcq-answer", data: option });
    //set to session for styling
    window.sessionStorage.setItem("mcq-answer", option);
  };

  const getColor = () => {
    return window.sessionStorage.getItem("mcq-answer") == option
      ? "var(--green)"
      : "";
  };

  // remove / delete choice
  const removeChoice = (e) => {
    let div = e.target.parentNode.parentNode.parentNode.parentNode;
    //assing id for css animation with id choice-removed
    div.id = div.className == "choice" ? "choice-removed" : "";

    setTimeout(() => {
      dispatch({ type: "remove-mcq", data: option });
    }, 900);
  };

  //editing the choice
  const editChoice = () => {
    currentEdit(option);
  };

  return (
    <div className="choice">
      <div className="choice-txt">
        <h4>{option}</h4>
      </div>
      <div className="choice-option">
        <div>
          <FaEdit color="var(--blue-dark-2)" onClick={editChoice} />
        </div>
        <div>
          <FaTrash color="var(--red)" onClick={removeChoice} />
        </div>
        <div>
          <FaCircle onClick={setAnswer} color={getColor()} />
        </div>
      </div>
    </div>
  );
}

export default Choice;
