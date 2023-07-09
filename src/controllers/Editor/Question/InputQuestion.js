import Question from "./Question";

export default class InputQuestion extends Question {
  constructor(subject, grade, level, topic) {
    super("input-type", subject, grade, level, topic);
    this.tolerance = undefined;
    this.answer = undefined; //answer must be an index that represents the right option in the option array
    this.answerType = "numerical";
  }

  setAnswer(answer) {
    this.answer = answer;
  }

  setTolerance(tolerance) {
    this.tolerance = tolerance;
  }

  setAnswerType(type) {
    this.answerType = type;
  }

  //add logic to determine if the question is well formated ie. the description  and answer are none empty.  ensure that answer field is not undefined etc. if any of these things fail just throw an error
  saveQuestion() {
    //must save the question in json format to the database
    throw new Error("We can't save anything at the moment. API is not built yet");
    console.log(this.toJsonFormat());
    return;
  }
}
