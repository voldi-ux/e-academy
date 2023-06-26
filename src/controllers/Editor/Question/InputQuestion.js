import Question from "./Question";

export default class InputQuestion extends Question {
  constructor( subject, grade, level, topic) {
    super("input-type", subject, grade, level, topic);
    this.tolerance = 0.1;
    this.answer = null; //answer must be an index that represents the right option in the option array
  }

  setAnswer(answer) {
    this.answer = answer;
  }

  setTolerance(tolerance) {
    this.tolerance = tolerance;
  }
}
