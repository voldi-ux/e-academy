import Button from '../Button/Button'

import {ReactComponent as Share} from '../../resources/icons/share.svg'
import { ReactComponent as Like } from '../../resources/icons/thumbUp.svg'
import {ReactComponent as BookMark} from '../../resources/icons/bookmark.svg'
import {ReactComponent as Visible} from '../../resources/icons/visibility.svg'
import {ReactComponent as Schedule} from '../../resources/icons/schedule.svg'




const Question = ({identity, grade, school, subject, topic, description, illustration}) => {
  return (
    <div className='question'>
        <header>
             
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
            <Button color="var(--purple)">  <Schedule className="icon"/> 2 min ago  </Button>
            <Button color="var(--grey)"> <Like className="icon"/>  20 likes </Button>
            <Button color="var(--green)"> <Visible className="icon"/>  View </Button>
           </div>

           <div className='btn'>
           <Button color="var(--yellow)"> <BookMark style={{width:"20px", height:"20px"}}  className="icon"/>  Bookmark </Button>
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
