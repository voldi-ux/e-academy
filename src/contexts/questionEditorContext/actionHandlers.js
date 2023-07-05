/** @format */

import imageBlock from "../../controllers/Editor/Block/ImageBlock";
import TextBlock from "../../controllers/Editor/Block/TextBlock";
import InputQuestion from "../../controllers/Editor/Question/InputQuestion";
import MCQ from "../../controllers/Editor/Question/Mcq";
import { getTopicArrays, getTopics } from "../../utils/topics";

export function handleChangeText(state, data) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  //finds and updates the textBlock that the user wants to update
  let description = question.description.map((item) => {
    if (item instanceof TextBlock && item.blockId === data.id) {
      let newBlock = Object.create(item);
      newBlock.setContent(data.content);
      return newBlock;
    }
    return item;
  });

  //this action must be logged in the redo stack

  question = Object.create(question);
  question.setDescription(conflate(description));

  return {
    ...state,
    question,
    undoStack,
    redoStack: []
  };
}

export function handleTextProps(state, { data, type }) {
  let question = state.question;
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  //finds and updates the textBlock that the user wants to update
  let description = question.description.map((item) => {
    if (item instanceof TextBlock && item.blockId === data.id) {
      let newBlock = Object.create(item);

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
      }
      return newBlock;
    }
    return item;
  });

  //this action must be logged in the redo stack
  question = Object.create(question);
  question.setDescription(conflate(description));

  return {
    ...state,
    question,
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
      let newBlock = Object.create(item);
      switch (type) {
        case "change-image": {
          newBlock.setImage(data.to);
          break;
        }
      }

      return newBlock;
    }
    return item;
  });

  question = Object.create(question);
  question.setDescription(conflate(description));

  return {
    ...state,
    question,
    undoStack,
    redoStack: []
  };
}

//============================================================================
//combines any subsquent textblocks into one
export function conflate(description) {
  if (description.length > 0) {
    let newArrDes = [];
    newArrDes[0] = Object.create(description[0]); // copying the initial object and updating its prototype

    let i = 0;
    let j = 1;

    while (j < description.length) {
      //this code allows us to only conflate two or more blocks if they have the same properties
      if (description[j] instanceof TextBlock && newArrDes[i] instanceof TextBlock && equalBlocksProps(description[j], newArrDes[i])) {
        //we need to create a new textblock object since we don't want to modify any of the blocks stored in our state
        let block = Object.create(newArrDes[i]);

        //here we combine the contents of the two blocks
        let newContent = newArrDes[i].content + "\n" + description[j].content;
        block.setContent(newContent); //updating the content
        newArrDes[i] = block; // reassign the value at index i
      } else {
        //if the block is not a textblock or it is but its previous element is not a textblock then we just add into the new array at position i + 1 since there is already an element at postion at i
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
    newQuestion.setDescription(description) // we want to inherit the previous descriptions so that we can swtich between different questions without losing content on the screen
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
  let question = Object.create(state.question);
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  question.changeSubject(to);
  //we use a helper function to get a list of subjects assosicated with a particular subject and set the first topic on the list to be the default topic
  question.changeTopic(getTopics(question.grade, to)[0]);
  return {
    ...state,
    question,
    undoStack,
    redoStack: []
  };
}

export function changeTopic(state, { to }) {
  let question = Object.create(state.question);
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  question.changeTopic(to);
  return {
    ...state,
    question,
    undoStack,
    redoStack: []
  };
}

export function changeLevel(state, { to }) {
  let question = Object.create(state.question);
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  question.changeLevel(to);

  return {
    ...state,
    question,
    undoStack,
    redoStack: []
  };
}

export function changeGrade(state, { to }) {
  let question = Object.create(state.question);
  let undoStack = state.undoStack.concat(question); // we log the previous state of the question before modifying it
  question.changeGrade(to);
  // we also change the topic whenever the grade is changed
  question.changeTopic(getTopics(question.grade, question.subject)[0]);

  return {
    ...state,
    question,
    undoStack,
    redoStack: []
  };
}
