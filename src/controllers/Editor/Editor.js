
export default class Editor {
    constructor (questionType,question,subject,grade,level,topic) { 
        this.questionType = questionType;
        this.question = question;
        this.subject = subject;
        this.grade = grade;
        this.level = level; 
        this.topic = topic;
    }
    saveQuestion() { //must save the question in json format to the database 
      //let question  = question.json();
    }
   
    //changes the subject
    changeSubject(newSub) { 

    }
    //change the grade 
    changeGrade(newGrade) { 

    }

    //changes the difficult of the question
    changeLevel(newLevel) {

    }

    //changes the current topic
    changeTopic(newTopic) { 
        
    }
 }