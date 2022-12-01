import './Notification.css'
import { ReactComponent as Schedule } from '../../../resources/icons/schedule.svg'
import { ReactComponent as Like } from '../../../resources/icons/thumbUp.svg'




import Button from '../../Button/Button'

const Notification = ({name, question, icon}) => {
  return (
    <div className='notification'>

        <div>
      <h2 className='question-container'> <span className='question'> {name}:  </span> </h2>
     <p>{question}</p>
       
       <div className="btns">
      <Button color="var(--purple)">  <Schedule className='icon'/> 20 min ago</Button>
      <Button color="var(--green)">  <Like className='icon'/>  53 likes </Button>
       <div className="remove">
       <Button color="var(--red)">  Delete </Button>
       </div>
      </div>
      </div>

      <div className='delete'>
         <i  class={icon} aria-hidden="true"></i>
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
