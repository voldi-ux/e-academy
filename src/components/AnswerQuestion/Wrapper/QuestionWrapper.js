//Other components
import AQuestion from  '../Question/AQuestion'
import './QuestionWrapper.css'
import Editor from '../Editor/Editor'
import Bookmark from '../../BookMark/Bookmark/Bookmark'

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
     
      <div className="item"> <Bookmark/></div>
      <div className="item"> <Bookmark/></div>
      <div className="item"> <Bookmark/></div>

      

      <h2 style={{paddingLeft:"1rem"}}>show more...</h2>
      </div>
      
       <h1 className='answer-h'>Answer this question... <i style={{color:"black"}} class="fa-solid fa-pen "></i> </h1>
      <Editor/>

     
    </div>
  )
}

export default QuestionWrapper
