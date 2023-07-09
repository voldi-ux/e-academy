/** @format */

import TextBlock from "../../controllers/Editor/Block/TextBlock";
import InputQuestion from "../../controllers/Editor/Question/InputQuestion";
import MCQ from "../../controllers/Editor/Question/Mcq";
import { changeGrade, changeLevel, changeSub, changeTopic, conflate, createQuestionType, handColor, handleChangeText, handleImageProps, handleTextProps } from "./actionHandlers";

//inital state
export const intitialState = {
  question: new MCQ("Mathematics", 10, 3, "Algebra"), //default question type that the editor will assume the user wants to create
  undoStack: [], // stores the operations the user has recently carried out.
  redoStack: [], //stores actions popped out from the undoStack
  saving: false,
  questionJson: null //represents the question in json format so that we can save to the database
};

export function EditorQuestionReducer(state, action) {
  switch (action.type) {
    case "undo": {
      if (!state.undoStack.length) return state; // we don't want to do anything if the stack is already empty other we create a new stack since we don't want to modify the one that leave in the state.
      let newStack = [...state.undoStack];
      let preVquestion = newStack.pop();
      let newRedoStack = state.redoStack.concat(state.question); // we push the current question on the redoStack

      return {
        ...state,
        question: preVquestion,
        undoStack: newStack,
        redoStack: newRedoStack
      };
    }
    case "redo": {
      if (!state.redoStack.length) return state;
      let newStack = [...state.redoStack];
      let preVquestion = newStack.pop();
      let newUndoStack = state.undoStack.concat(state.question); // we push the current question on the undostack

      return {
        ...state,
        question: preVquestion,
        undoStack: newUndoStack,
        redoStack: newStack
      };
    }

    //handles the editing of texts
    case "change-text": {
      return handleChangeText(state, action.data);
    }

    //handles the adding of an image the editor
    case "add-image": {
      let question = state.question;
      let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
      let description = state.question.description.concat(action.data);

      let cloneQuestion = { ...question }; // copy the question
      Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
      cloneQuestion.setDescription(conflate(description)); 

      return {
        ...state,
        question:cloneQuestion,
        undoStack,
        redoStack: []
      };
    }
    case "add-text": {
      let question = state.question;
      let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
      let description = state.question.description.concat([new TextBlock()]);
       let cloneQuestion = { ...question }; // copy the question
       Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
       cloneQuestion.setDescription(conflate(description)); 

      return {
        ...state,
        question:cloneQuestion,
        undoStack,
        redoStack: []
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
      let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
      let description = state.question.description.filter((block) => block.blockId !== action.id);
       let cloneQuestion = { ...question }; // copy the question
       Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
       cloneQuestion.setDescription(conflate(description)); 

      return {
        ...state,
        question:cloneQuestion,
        undoStack,
        redoStack: []
      };
    }

    case "change-questionType": {
      if (action.to == state.question.questionType) {
        return state;
      }
      let question = state.question;
      let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
      return {
        ...state,
        question: createQuestionType(state, action),
        undoStack,
        redoStack: []
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

    case "add-option": {
      let { grade, level, subject, topic, description, options } = state.question;
      let newQuestion = new MCQ(subject, grade, level, topic);
      newQuestion.setDescription(description);

      //assume  option does not exist
      let optionExists = false;
      options.forEach((element) => {
        if (element.trim() == action.data.trim()) {
          optionExists = true;
        }
      });

      //validate and assign new array of options
      optionExists ? (newQuestion.options = options) : (newQuestion.options = [...options, action.data]);

      return {
        ...state,
        question: newQuestion
      };
    }

    case "remove-mcq": {
      let { grade, level, subject, topic, description, options } = state.question;
      let newQuestion = new MCQ(subject, grade, level, topic);
      newQuestion.setDescription(description);

      newQuestion.options = options.filter((key) => key !== action.data);

      return {
        ...state,
        question: newQuestion
      };
    }

    case "edit-mcq-option": {
      let { grade, level, subject, topic, description, options } = state.question;
      let newQuestion = new MCQ(subject, grade, level, topic);
      newQuestion.setDescription(description);

      //assume new edit != option in array
      let optionExists = false;
      options.forEach((element) => {
        if (element.trim() === action.data.option.trim()) {
          optionExists = true;
        }
      });

      //loop through and  update
      options.map((item, index) => {
        if (item.trim() === action.data.old.trim() && optionExists === false) {
          options[index] = action.data.option;
        }
      });

      newQuestion.options = options;

      return {
        ...state,
        question: newQuestion
      };
    }

    case "set-mcq-answer": {
      let { grade, level, subject, topic, description, options } = state.question;
      let newQuestion = new MCQ(subject, grade, level, topic);
      newQuestion.setDescription(description);
      //loop through  array and get index
      options.map((item, index) => {
        if (item.trim() === action.data.trim()) {
          newQuestion.setAnswer(index);
        }
      });
      newQuestion.options = options;

      return {
        ...state,
        question: newQuestion
      };
    }

    case "add-textual": {
      let { grade, level, subject, topic, description } = state.question;
      let newQuestion = new InputQuestion(subject, grade, level, topic);
      newQuestion.setDescription(description);
      newQuestion.setAnswer(action.answer);
      newQuestion.setAnswerType("textual");
      console.log(newQuestion);

      return {
        ...state,
        question: newQuestion
      };
    }

    case "add-numerical": {
      let { grade, level, subject, topic, description } = state.question;
      let newQuestion = new InputQuestion(subject, grade, level, topic);
      newQuestion.setDescription(description);
      newQuestion.setAnswer(action.data.answer);
      newQuestion.setTolerance(action.data.tolerance);
      newQuestion.setAnswerType("numerical");
      console.log(newQuestion);
      return {
        ...state,
        question: newQuestion
      };
    }
      

    default: {
      return state;
    }
  }
}
