import './Notification.css'
import Button from '../../Button/Button'

const Notification = ({name, question, icon}) => {
  return (
    <div className='notification'>

        <div>
      <h2 className='question-container'> <span className='question'> {name}:  </span> </h2>
     <p>{question}</p>
       
       <div className="btns">
      <Button color="var(--purple)"> <i className="fa fa-clock"></i>  20 min ago</Button>
      <Button color="var(--green)"> <i className="fa fa-thumbs-up"></i> 56 likes </Button>
       <div className="remove">
       <Button color="var(--red)"> <i className="fa fa-trash"></i> Delete </Button>
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
