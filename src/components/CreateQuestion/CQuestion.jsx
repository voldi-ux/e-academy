
import './CQuestions.css'
import Filter from '../../filter/filter';
import Button from '../Button/Button';
import TextEditor from './Editor/TxtEditor/TextEditor';
import Choice from './Choice';
import MainEditor from '../EditorMain/mainEditor';

const CQuestion = () => {


    return(
      <div className='create-question-wrapper'>

         <div className="question-properties-container">
               <Filter title={'Question Type'} defaultSelect={'MCQ'} />
               <Filter title={'Subject'} defaultSelect={'Maths'} />
               <Filter title={'Grade'} defaultSelect={'10'} />
               <Filter title={'Level'} defaultSelect={'3'} />
         </div>
            
             <MainEditor />
     

      </div>
        
    )
}

export default CQuestion;