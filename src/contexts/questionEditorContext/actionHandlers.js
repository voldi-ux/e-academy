/** @format */

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

//combines any subsquent textblocks into one
export function conflate(description) {
      
  if (description.length > 0) {
    let newArrDes = [];
      newArrDes[0] = { ...description[0], __proto__: description[0].__proto__ }; // copying the initial object and updating its prototype

    let i = 0;
    let j = 1;

    while (j < description.length) {
        if (description[j] instanceof TextBlock && newArrDes[i] instanceof TextBlock) {
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
