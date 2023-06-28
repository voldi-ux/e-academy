/** @format */

import imageBlock from "../../controllers/Editor/Block/ImageBlock";
import TextBlock from "../../controllers/Editor/Block/TextBlock";

export function handleChangeText(state, data) {
  let question = state.question;
  //finds and updates the textBlock that the user wants to update
  let description = question.description.map((item) => {
    console.log(item, data);
    if (item instanceof TextBlock && item.blockId === data.id) {
      item.setContent(data.content);
    }
    return item;
  });

  //this action must be logged in the redo stack

  return {
    ...state,
    question: {
      ...question,
      description: conflate(description)
    }
  };
}

export function handleTextProps(state, { data, type }) {
  let question = state.question;
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
  return {
    ...state,
    question: {
      ...question,
      description: conflate(description)
    }
  };
}

export function handleImageProps(state, { data, type }) {
  let question = state.question;
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

  //this action must be logged in the redo stack

  return {
    ...state,
    question: {
      ...question,
      description: conflate(description)
    }
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
        let block = new TextBlock();

        //here we combine the contents of the two blocks
        let newContent = newArrDes[i].content + "\n" + description[j].content;
        block.setContent(newContent); //updating the content
        newArrDes[i] = block; // reassign the value at index i
      } else {
        //if the block is not an textblock or it is but is previous element is not a textblock then we just add into the new array at position i + 1 since there is already an element at postion at i
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
  console.log("block1", block1);
  console.log("block2", block2);
  return false;
}
