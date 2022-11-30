//Other components
import AQuestion from  '../Question/AQuestion'
import './QuestionWrapper.css'
import Editor from '../Editor/Editor'
import Notification from '../../Notification/Notification/Notification'

//React packages
import {Link} from 'react-router-dom'

const QuestionWrapper = () => {
  return (
    <div className='questionWrapper'>

    <div className='heading'> 
    <Link to="/questions">
    <a href="/"><i className="fa fa-thin fa-arrow-left fa-2x"></i></a>
    </Link>
    <h1>Answer Question</h1>
    </div>

      <AQuestion/>
     
     <div className="notify">
      <h1><span className="not"><i style={{color:"black"}} className="fa fa-comments fa-lg"></i></span> 56 people answered this question</h1>
      <Notification question="This is the first principal approach" icon="fa fa-comments fa-lg"/>
      <Notification question="This is the first principal approach" icon="fa fa-comments fa-lg"/>
      <Notification question="This is the first principal approach, you have to factor out h" icon="fa fa-comments fa-lg"/>

      <h2 style={{paddingLeft:"1rem"}}>show more...</h2>
      </div>
      
       <h1 className='answer-h'>Answer this question... <i style={{color:"black"}} class="fa-solid fa-pen "></i> </h1>
      <Editor/>

     
    </div>
  )
}

export default QuestionWrapper
