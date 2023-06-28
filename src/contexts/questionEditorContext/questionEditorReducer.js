import TextBlock from "../../controllers/Editor/Block/TextBlock";
import MCQ from "../../controllers/Editor/Question/Mcq";
import { conflate, handColor, handleChangeText, handleImageProps, handleTextProps } from "./actionHandlers";



//inital state
export const intitialState = {
  question: new MCQ("Mathematics", 10, 3, "Algebra"), //default question type that the editor will assume the user wants to create
  undoStack: [], // stores the operations the user has recently carried out.
  redoStack: [] //stores actions popped out from the undoStack
};

export function EditorQuestionReducer(state, action) { 
    switch (action.type) {
      //this runs whenever the user wants to change the type of question they are working on
      case "change-question-type": {
        return {
          ...state,
          question: action.data // data == the new question
        };
      }
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
        let description = state.question.description.concat([action.data]);
        return {
          ...state,
          question: {
            ...state.question,
            description
          }
        };
      }
      case "add-text": {
        let description = state.question.description.concat([new TextBlock()]);
        return {
          ...state,
          question: {
            ...state.question,
            description: conflate(description)
          }
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
        let description = state.question.description.filter(block => block.blockId !== action.id)
        return {
          ...state,
          question: {
            ...state.question,
            description: conflate(description) // we need to conflate incase the image removed was sandwiched between two textblock elements with the same properties
          }
        };
      }
    }


} 