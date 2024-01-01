/** @format */

import ImageBlock from "../controllers/Editor/Block/ImageBlock";
import { getTopics } from "./topics";

//filters for the editor
export function getEditorFilters(question, dispatch) {
  const filterGrades = {
    title: "Grade",
    options: ["10", "11", "12"],
    action: (grade) => dispatch({ type: "change-grade", to: grade })
  };

  const filterQuestionType = {
    title: "Question Type",
    options: ["MCQ", "Input"],
    action: (questionType) => dispatch({ type: "change-questionType", to: questionType })
  };

  const filterSubjects = {
    title: "Subjects",
    options: ["Mathematics", "Physics"],
    action: (subject) => dispatch({ type: "change-subject", to: subject })
  };

  const filterLevels = {
    title: "Level",
    options: [1, 2, 3, 4, 5],
    action: (level) => dispatch({ type: "change-level", to: level })
  };

  const filterTopics = {
    title: "Topic",
    options: getTopics(question.grade, question.subject),
    action: (topic) => dispatch({ type: "change-topic", to: topic })
  };

  return {
    filterGrades,
    filterLevels,
    filterQuestionType,
    filterSubjects,
    filterTopics
  };
}

//function for selcting a file using the file and making it available for the editor
export function getfileSelectHandler(dispatch) {
  return (e) => {
    let files = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      let image = new ImageBlock(e.target.result);
      dispatch({
        type: "add-image",
        data: image
      });
    };

    reader.onerror = (e) => console.log(e);

    if (files.length > 0) reader.readAsDataURL(files[0]);

    e.target.value = ""; // reset the paths that the user has selected so they are able to select the same file again
  };
}

//configuring mathjx
export function configMathjx() {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.text = `
      MathJax.Hub.Config({
        tex2jax: {inlineMath: [['$', '$'], ['\\(', '\\)']]}
      });
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    `;

  return script;
}

// function for handling a contextmenu
export function getContextMenuHandler(block, blockContainerRef) {
  return (e) => {
    e.preventDefault();
    const menus = document.querySelectorAll(".context-menu-container");
    for (const context of menus) {
      let parentElement = context.parentElement;
      if (parentElement.id == block.blockId) {
        // to calcuate the top and left values, we need to know the relative distance the texblock is from the viewport
        const { top, left, width } = blockContainerRef.current.getBoundingClientRect();
        let xRelative = e.clientX - left;
        let yRelative = e.clientY - top;

        context.style.top = yRelative + "px";
        context.style.left = width - xRelative < 200 ? width - 200 + "px" : xRelative + "px";
        context.style.display = "block";
      } else {
        context.style.display = "none";
      }
    }
  };
}

//format editor text
export function formater(string) {
  return string.replaceAll("\n", `<br></br>`);
}
