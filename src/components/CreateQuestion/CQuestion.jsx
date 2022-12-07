
import './CQuestions.css'
import Filter from '../../filter/filter';
import Button from '../Button/Button';
import TextEditor from './Editor/TxtEditor/TextEditor';
import Choice from './Choice';

const CQuestion = () => {


    return(
        <div className='wrapper'>

         <div className='quest-body'>

            <div className="question-properties">
                  <Filter title={'Question Type'} defaultSelect={'MCQ'} />
                  <Filter title={'Question Type'} defaultSelect={'MCQ'} />
                  <Filter title={'Question Type'} defaultSelect={'MCQ'} />
                  <Filter title={'Question Type'} defaultSelect={'MCQ'} />
            </div>

            <div className="question-container">
               <TextEditor/>
            </div>

            <div className="quest-tools">
               <div className='option-btns'>
                  <span><Button className="optn-btn">options</Button></span>
                  <span><Button className="optn-btn" color='var(--green)' >add option<i className='fa fa-add'></i></Button></span>
               </div>

               <div className='choices'>
                  <Choice text='The ball will move to the left' icon="fa fa-trash fa-lg"/>
                  <Choice text='The ball will move to the left' icon="fa fa-trash fa-lg"/>
                  <Choice text='The ball will move to the left' icon="fa fa-trash fa-lg"/>
                  <Choice text='The ball will move to the left' icon="fa fa-trash fa-lg"/>
               </div>

               <div className='prev'>
                  <Button className='prev-btn' color='var(--blue-dark)'>Preview Question</Button>
               </div>
            </div>

         </div>
        </div>
    )
}

export default CQuestion;