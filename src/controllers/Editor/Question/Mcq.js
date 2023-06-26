import Question from "./Question";

export default class MCQ extends Question {
  constructor( subject, grade, level, topic) {
    super("MCQ", subject, grade, level, topic);
    this.options = [];
    this.answer = null; //answer must be an index that represents the right option in the option array
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