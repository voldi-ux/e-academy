/** @format */

export default class Question {
  constructor(questionType, subject, grade, level, topic) {
    this.questionType = questionType;
    this.subject = subject;
    this.grade = grade;
    this.level = level;
    this.topic = topic;
    this.description = []; //each and every question must have a description a question heading, a picture or both
  }

  //changes the subject
  changeSubject(newSub) {
    this.subject = newSub;
  }
  //change the grade
  changeGrade(newGrade) {
    this.grade = newGrade;
  }

  //changes the difficult of the question
  changeLevel(newLevel) {
    this.level = newLevel;
  }



  //changes the current topic
  changeTopic(newTopic) {
    this.topic = newTopic;
  }

  // block => a textblock or an image block
  addToDescription(block) {
    this.description.push(block);
  }

  setDescription(des) {
    this.description = des;
  }

  //converts the question into jason form so it can written to a database
  toJsonFormat() {
    return JSON.stringify(this, null, true);
  }
}
