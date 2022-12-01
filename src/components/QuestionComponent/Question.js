import Button from '../Button/Button'
import './Question.css'

//icons
import {ReactComponent as Share} from '../../resources/icons/share.svg'

//react packages
import {Link} from "react-router-dom"




const Question = ({identity, grade, school, subject, topic, description, illustration}) => {
  return (
    <div className='question'>
        <header className='q-header'>
             
         <div>
            <h3>Posted By: {identity}  </h3>
            <ul>
                <li>Grade {grade} Leaner</li>
                <li>{school}</li>
                <li> {subject}: {topic}</li>
            </ul>
         </div>

            <div className='share'>
               <a href="index.html"> <Share className="icon" /> </a>
            </div>

        </header>

        <div className="showcase">
             <h3>{description}</h3>
            <div className="illustration">
               <img src={illustration} alt="Illustration" />
            </div>
        </div>

        <footer className='questionFooter'>
           <div className='btns'>
            <Button color="var(--purple)">  <i className="fa fa-clock"></i> 2 min ago  </Button>
            <Button color="var(--grey)"> <i className="fa fa-thumbs-up"></i>  20 likes </Button>

            <Link to={"/answer-question"}>
            <Button color="var(--green)"> <i className="fa fa-eye"></i>  View </Button>
            </Link>
           </div>

           <div className='btn'>
           <Button color="var(--yellow)"> <i className="fa fa-bookmark"></i>  Bookmark </Button>
           </div>
        </footer>
      
    </div>
  )
}


Question.defaultProps = 
{
  identity: "Voldi Muyumba",
  grade: 12,
  school: "Barnato Park High School",
  subject: "Mathematics",
  topic: "Trigonometry",
  description: "How do I solve for x in this problem?",
  illustration: "https://i2.wp.com/www.mathbootcamps.com/wp-content/uploads/example4-pythagorean-theorem.png?resize=589%2C325"
}

export default Question
