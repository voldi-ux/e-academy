
import './CQuestions.css'
import Filter from '../../filter/filter';
import Button from '../Button/Button';
import TextEditor from './Editor/TxtEditor/TextEditor';
import Choice from './Choice';

const CQuestion = () => {


    return(
      <div className='create-question-wrapper'>

         <div className="question-properties-container">
               <Filter title={'Question Type'} defaultSelect={'MCQ'} />
               <Filter title={'Subject'} defaultSelect={'Maths'} />
               <Filter title={'Grade'} defaultSelect={'10'} />
               <Filter title={'Level'} defaultSelect={'3'} />
         </div>

         <div className="txt-editor-container">
            <TextEditor/>
         </div>

         <div className="quest-tools">
            <div className='option-btns-container'>
               <span><Button className="optn-btn"><strong>options</strong></Button></span>
               <span><Button className="optn-btn" color='var(--green)' ><strong>add option</strong><i className='fa fa-add'></i></Button></span>
            </div>

            <div className='mcq-choices'>
               <Choice text='The ball will move to the left' icon="fa fa-trash fa-lg"/>
               <Choice text='The ball will move to the right' icon="fa fa-trash fa-lg"/>
               <Choice text='The ball will move in a straight path' icon="fa fa-trash fa-lg"/>
               <Choice text='none of the above' icon="fa fa-trash fa-lg"/>
            </div>

            <div className='prev-btn-container'>
               <Button className='prev-btn' color='var(--blue-dark)'><strong>Preview Question</strong></Button>
            </div>
         </div>

      </div>
        
    )
}

export default CQuestion;