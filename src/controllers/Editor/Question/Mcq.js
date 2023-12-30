/** @format */

import TextBlock from "../Block/TextBlock";
import Question from "./Question";

export default class MCQ extends Question {
  constructor(subject, grade, level, topic) {
    super("MCQ", subject, grade, level, topic);
    this.options = [];
    this.rightAnswerIndex = 2; //answer must be an index that represents the right option in the option array

    // super.addToDescription(textBlock); // adding a default text for testing
  }

  //adds an option to our options array
  addOption(option) {
    this.options.push(option);
  }

  //removes the option from the array
  removeOption(optionID) {}

  setAnswer(rightAnswerIndex) {
    this.rightAnswerIndex = rightAnswerIndex;
  }

  getAnswer() {
    return this.rightAnswerIndex;
  }

  //add logic to determine if the question is well formated ie. the description and options arrrays are none empty.  ensure that answer field is not undefined etc. if any of these things fails just throw an error
  saveQuestion() {
    //must save the question in json format to the database
    throw new Error("We can't save anything at the moment. API is not built yet");
    console.log(this.toJsonFormat());
    return;
  }
}
