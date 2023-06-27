import TextBlock from "../Block/TextBlock";
import Question from "./Question";


const content =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ";


  //default textblock for testing
let textBlock = new TextBlock();
textBlock.setContent(content);



export default class MCQ extends Question {
  constructor( subject, grade, level, topic) {
    super("MCQ", subject, grade, level, topic);
    this.options = [];
    this.answer = null; //answer must be an index that represents the right option in the option array

    super.addToDescription(textBlock); // adding a default text for testing
  }

  //adds an option to our options array
  addOption(option) {
    this.options.push(option);
  }

  //removes the option from the array
  removeOption(optionID) {}

  setAnswer(answer) {
    this.answer = answer;
  }
}