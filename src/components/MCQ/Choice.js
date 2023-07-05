import { useContext } from "react"
import "./MCQ.css"
import {FaTrash, FaEdit, FaThumbsUp} from "react-icons/fa"
import { questionEditorContext } from "../../contexts/questionEditorContext/questionEditorcontext"


function Choice(option) {
   const { dispatch } = useContext(questionEditorContext)
   //const del
    return(
       <div className="choice">
         
         <div className="choice-txt">
            <h4>The ball goes down</h4>
         </div>

        
         <div className="choice-option">
         <FaEdit/> <FaTrash/> <FaThumbsUp color="var(--green)"/>
        </div>
       
        
        
       </div>
    )
}


export default Choice