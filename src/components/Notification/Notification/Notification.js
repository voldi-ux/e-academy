import './Notification.css'
import { ReactComponent as Schedule } from '../../../resources/icons/schedule.svg'
import { ReactComponent as Like } from '../../../resources/icons/thumbUp.svg'
import { ReactComponent as Delete } from '../../../resources/icons/delete.svg'



import Button from '../../Button/Button'

const Notification = ({name, question}) => {
  return (
    <div className='notification'>

        <div>
      <h2 className='question-container'> <span className='question'> {name} asked a question:   </span> {question}</h2>
       
       <div className="btns">
      <Button color="var(--purple)">  <Schedule className='icon'/> 20 min ago</Button>
      <Button color="var(--green)">  <Like className='icon'/>  53 likes </Button>
       <div className="remove">
       <Button color="var(--red)"> Delete </Button>
       </div>
      </div>
      </div>

      <div className='delete'>
         <Delete className='d-icon'/>
      </div>

    </div>
  )
}


Notification.defaultProps = 
{
    name: "Voldi",
    question: "What relationship exists between trig ratios and trig functions?"
}

export default Notification
