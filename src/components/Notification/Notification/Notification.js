import './Notification.css'
import Button from '../../Button/Button'
import { FaClock, FaThumbsUp, FaTrash } from 'react-icons/fa'

const Notification = ({name, question, icon}) => {
  return (
    <div className='notification'>

        <div>
      <h2 className='question-container'> <span className='question'> {name}:  </span> </h2>
     <p>{question}</p>
       
       <div className="btns">
      <Button color="var(--purple)"> <FaClock /> 20 min ago </Button>
      <Button color="var(--green)"><FaThumbsUp/> 56 likes  </Button>
       <div className="remove">
       <Button color="var(--red)"> <FaTrash/>Delete </Button>
       </div>
      </div>
      </div>

      <div className='delete'>
        <FaTrash fontSize="20px"/>
      </div>

    </div>
  )
}


Notification.defaultProps = 
{
    name: "Voldi",
    question: "What relationship exists between trig ratios and trig functions?",
    icon: "fa fa-trash fa-lg"
}

export default Notification
