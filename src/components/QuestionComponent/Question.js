import Button from './Button'

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
               <a href="index.html"> <i className='fa fa-share-alt fa-lg' /></a>
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
            <Button iconName="fa fa-clock" title="2 days ago" color="#800080" />
            <Button iconName="fa fa-thumbs-up" title="20 likes" color="#888888" />
            <Button iconName="fa fa-eye" title="view" color="#03C03C" />
           </div>

           <div className='btn'>
           <Button iconName="fa fa-bookmark" title="Bookmark"  color="#FFC72C"/>
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
