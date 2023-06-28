import React, { useReducer } from "react"
import { useImmerReducer } from "use-immer"
import { questionEditorContext } from "./questionEditorcontext";
import { EditorQuestionReducer, intitialState } from "./questionEditorReducer";






const QuestionEditorProvider = ({ children }) => { 
    
    const [editorState, dispatch] = useImmerReducer(EditorQuestionReducer, intitialState); 
      
    return <questionEditorContext.Provider value={{
        question: editorState.question,
        dispatch
    }}>
        {children}
    </questionEditorContext.Provider> 
}



export default QuestionEditorProvider;