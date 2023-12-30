/** @format */

import ImageBlock from "../Block/ImageBlock";
import TextBlock from "../Block/TextBlock";

export default class Question {
  constructor(questionType, subject, grade, level, topic) {
    this.questionType = questionType;
    this.subject = subject;
    this.grade = grade;
    this.level = level;
    this.topic = topic;
    this.description = []; //each and every question must have a description a question heading, a picture or both
    this.blockSeperator = "###";
    this.propertySeperator = "##";
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

  // this method will tranform the question content (description or ) into a form required by the database

  transformQuestion() {
    return {
      ...this,
      description: this.transformContent(this.description),
      explanation: this.transformContent(this.description) // we need to an explanation property that will hold a full description of the solution
    };
  }
  transformContent(content) {
    // the question to save to database

    let contentTransformed = "";

    content.forEach((block) => {
      if (block instanceof TextBlock) {
        const entries = Object.entries(block);
        let content = "blockType:T ";
        for (const [key, value] of entries) {
          content += `${key}:${value} ` + this.propertySeperator + " ";
        }
        content += this.blockSeperator + " ";
        contentTransformed += content;
      } else if (block instanceof ImageBlock) {
        //process image block
        let imgLink = this.saveImage(block.getBlockId()); // it should save the image to one
        // of the storage services ie aws bucket or google store storage

        let content = `blockType:I width:${block.width} ${this.propertySeperator} height:${block.height} ${this.propertySeperator} imgLink:${imgLink} ${this.blockSeperator} `;
        contentTransformed += content;
      } else {
        console.error("the question has some invalid content");
      }
    });

    return contentTransformed;
  }

  saveImage(img) {
    return img; // for now we return the image block id
  }
}
