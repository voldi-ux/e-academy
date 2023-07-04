/** @format */

import TextBlock from "../../controllers/Editor/Block/TextBlock";
import MCQ from "../../controllers/Editor/Question/Mcq";
import { changeGrade, changeLevel, changeSub, changeTopic, conflate, createQuestionType, handColor, handleChangeText, handleImageProps, handleTextProps } from "./actionHandlers";

//inital state
export const intitialState = {
  question: new MCQ("Mathematics", 10, 3, "Algebra"), //default question type that the editor will assume the user wants to create
  undoStack: [], // stores the operations the user has recently carried out.
  redoStack: [] //stores actions popped out from the undoStack
};

export function EditorQuestionReducer(state, action) {
  switch (action.type) {
    case "un-do": {
    }
    case "redo": {
    }

    //handles the editing of texts
    case "change-text": {
      return handleChangeText(state, action.data);
    }

    //handles the adding of an image the editor
    case "add-image": {
      let question = state.question;
      let description = state.question.description.concat([action.data]);
      question = Object.create(question);
      question.setDescription(conflate(description));
      return {
        ...state,
        question
      };
    }
    case "add-text": {
      let question = state.question;
      let description = state.question.description.concat([new TextBlock()]);
      question = Object.create(question);
      question.setDescription(conflate(description));

      return {
        ...state,
        question
      };
    }

    case "change-casing": {
      return handleTextProps(state, action);
    }

    case "change-fontsize": {
      return handleTextProps(state, action);
    }

    case "change-bold": {
      return handleTextProps(state, action);
    }

    case "change-color": {
      return handleTextProps(state, action);
    }
    case "change-image": {
      return handleImageProps(state, action);
    }
    case "remove-image": {
      let question = state.question;
      let description = state.question.description.filter((block) => block.blockId !== action.id);
      question = Object.create(question);
      question.setDescription(conflate(description));

      return {
        ...state,
        question
      };
    }

    case "change-questionType": {
      if (action.to == state.question.questionType) {
        return state;
      }

      return {
        ...state,
        question: createQuestionType(state, action)
      };
    }

    case "change-subject": {
      return changeSub(state, action);
    }

    case "change-topic": {
      return changeTopic(state, action);
    }

    case "change-level": {
      return changeLevel(state, action);
    }

    case "change-grade": {
      return changeGrade(state, action);
    }
  }
}
