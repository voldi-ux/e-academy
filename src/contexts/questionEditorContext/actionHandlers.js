/** @format */

import imageBlock from "../../controllers/Editor/Block/ImageBlock";
import TextBlock from "../../controllers/Editor/Block/TextBlock";
import InputQuestion from "../../controllers/Editor/Question/InputQuestion";
import MCQ from "../../controllers/Editor/Question/Mcq";
import { getTopics } from "../../utils/topics";

export function handleChangeText(state, data, type) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  //finds and updates the textBlock that the user wants to update
  // let description = question.description.map((item) => {
  //   if (item instanceof TextBlock && item.blockId === data.id) {

  //     if (data.content == "") {
  //       return null;
  //     }

  //     let newBlock = { ...item };
  //     Object.setPrototypeOf(newBlock, Object.getPrototypeOf(item));
  //     newBlock.setContent(data.content);
  //     return newBlock;
  //   }
  //   return item;
  // });

  let description = type === "u" ? updateTextContent(question.description, data) : filterDescription(question.description, data.id);
  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.setDescription(conflate(description));

  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}

//helper functions
//==================================
function filterDescription(description, id) {
  return description.filter((item) => item.blockId !== id);
  //  console.log(description.find((item) => item.blockId == id).content  = "i");
  // return [...description];
}

function updateTextContent(description, data) {
  let mappedDescription = description.map((item) => {
    if (item instanceof TextBlock && item.blockId === data.id) {
      let newBlock = { ...item };
      Object.setPrototypeOf(newBlock, Object.getPrototypeOf(item));
      newBlock.setContent(data.content);
      return newBlock;
    }
    return item;
  });

  return mappedDescription;
}

export function handleTextProps(state, { data, type }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  //finds and updates the textBlock that the user wants to update
  let description = question.description.map((item) => {
    if (item instanceof TextBlock && item.blockId === data.id) {
      let newBlock = { ...item };
      Object.setPrototypeOf(newBlock, Object.getPrototypeOf(item));

      switch (type) {
        case "change-casing": {
          newBlock.setTextTransform(data.to);
          break;
        }

        case "change-fontsize": {
          newBlock.setFontSize(data.to);
          break;
        }

        case "change-bold": {
          newBlock.setWeight(data.to);
          break;
        }

        case "change-color": {
          newBlock.setColor(data.to);
          break;
        }
        default:
      }
      return newBlock;
    }
    return item;
  });
  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.setDescription(conflate(description));

  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}

export function handleImageProps(state, { data, type }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  //finds and updates the textBlock that the user wants to update
  let description = question.description.map((item) => {
    if (item instanceof imageBlock && item.blockId === data.id) {
      let newBlock = { ...item };
      Object.setPrototypeOf(newBlock, Object.getPrototypeOf(item));
      switch (type) {
        case "change-image": {
          newBlock.setImage(data.to);
          break;
        }

        default:
      }

      return newBlock;
    }
    return item;
  });

  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.setDescription(conflate(description));

  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}

//============================================================================
//combines any subsquent ans similar textblocks into one
export function conflate(description) {
  if (description.length > 0) {
    let newArrDes = [];
    let initBlock = { ...description[0] }; // intital block
    Object.setPrototypeOf(initBlock, Object.getPrototypeOf(description[0]));
    newArrDes[0] = initBlock;

    let i = 0; // will represent the previous block
    let j = 1; // will denote the next block (not necessarily consecutive to i)

    while (j < description.length) {
      //this code allows us to only conflate two or more blocks if they have the same properties
      if (description[j] instanceof TextBlock && newArrDes[i] instanceof TextBlock && equalBlocksProps(description[j], newArrDes[i])) {
        //we need to create a new textblock object since we don't want to modify any of the blocks stored in our state
        let block = { ...newArrDes[i] };
        Object.setPrototypeOf(block, Object.getPrototypeOf(newArrDes[i]));
        //here we combine the contents of the two blocks
        let newContent = newArrDes[i].content + "\n" + description[j].content;
        block.setContent(newContent); //updating the content
        newArrDes[i] = block; // reassign the value at index i
      } else {
        //if the block is not a textblock or it is but its previous element is not a textblock or the both are textblocks but not equal then we just add into the new array at position (i + 1) since there is already an element at postion at i
        newArrDes[++i] = description[j];
      }
      ++j; //increment j to avoid an infinite loop
    }

    return newArrDes;
  } else {
    return description;
  }
}

//a helper function to filter textblocks with no contents

//a helper function to determine if two textblocks have the same properties
function equalBlocksProps(block1, block2) {
  if (block1.fontSize === block2.fontSize && block1.weight === block2.weight && block1.color === block2.color && block1.textTransform === block2.textTransform) {
    return true;
  }
  return false;
}

//creates a new questiontype
export function createQuestionType(state, action) {
  let {
    question: { subject, grade, level, topic, description }
  } = state;
  if (action.to === "MCQ") {
    let newQuestion = new MCQ(subject, grade, level, topic);
    newQuestion.setDescription(description); // we want to inherit the previous descriptions so that we can swtich between different questions without losing content on the screen
    return newQuestion;
  } else if (action.to === "Input") {
    let newQuestion = new InputQuestion(subject, grade, level, topic);
    newQuestion.setDescription(description); // we want to inherit the previous descriptions so that we can swtich between different questions without losing content on the screen
    return newQuestion;
  }
}

//we change a subject
//to => the new subject
export function changeSub(state, { to }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.changeSubject(to);
  //we use a helper function to get a list of subjects assosicated with a particular subject and set the first topic on the list to be the default topic
  cloneQuestion.changeTopic(getTopics(question.grade, to)[0]);
  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}

export function changeTopic(state, { to }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.changeTopic(to);
  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}

export function changeLevel(state, { to }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.changeLevel(to);

  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}

export function changeGrade(state, { to }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  let cloneQuestion = { ...question }; // copy the question
  Object.setPrototypeOf(cloneQuestion, Object.getPrototypeOf(question));
  cloneQuestion.changeGrade(to);
  // we also change the topic whenever the grade is changed
  cloneQuestion.changeTopic(getTopics(cloneQuestion.grade, cloneQuestion.subject)[0]);

  return {
    ...state,
    question: cloneQuestion,
    undoStack,
    redoStack: []
  };
}
