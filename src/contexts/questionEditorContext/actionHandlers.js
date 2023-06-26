import TextBlock from "../../controllers/Editor/Block/TextBlock";

export function handleChangeText(state, data) { 
    let question = state.question;
    //finds and updates the textBlock that the user wants to update
    question.description = question.description.map(item => { 
        if (item instanceof TextBlock && item.blockId === data.blockId) { 
            console.log(data.content);
            item.setContent(data.content);
        }
        return item;
    })

    //this action must be logged in the redo stack

    return {
        ...state,
    }
} 