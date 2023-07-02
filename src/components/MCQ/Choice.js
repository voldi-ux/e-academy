import "./MCQ.css"
import {FaTrash, FaEdit, FaThumbsUp} from "react-icons/fa"


function Choice()
{
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