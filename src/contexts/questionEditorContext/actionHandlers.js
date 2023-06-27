import TextBlock from "../../controllers/Editor/Block/TextBlock";

export function handleChangeText(state, data) { 
    let question = state.question;
    //finds and updates the textBlock that the user wants to update
    let description = question.description.map(item => { 

        console.log(item, data);
        if (item instanceof TextBlock && item.blockId === data.id) { 
            item.setContent(data.content);
        }
        return item;
    })

    //this action must be logged in the redo stack

    return {
        ...state,
        question: {
             ...question,
            description
        }
    }
} 