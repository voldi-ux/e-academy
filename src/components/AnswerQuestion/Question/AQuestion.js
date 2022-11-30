import './AQuestion.css'

const AQuestion = ({description, illustration, identity,grade,subject, topic}) => {
  return (
    <div className='question'>
      <header className='q-header'>
        <div>
            <h2> {identity}({grade})    { subject + " : " + topic} </h2>
        </div>
        <div><h4>12 December 2022 </h4> </div>
      </header >

      <h3 id='question'>{description} </h3>
       
       <div className="illustration">
        <img src={illustration} alt="illustration" />
       </div>

    </div>
  )
}

AQuestion.defaultProps = 
{   
    grade : 12,
    subject: "Mathematics",
    topic: "Calculus",
    identity: "Voldi Muyumba",
    description: "Please explain to me the fifth step of the first principle? ",
    illustration:"https://m.siyavula.com/read/maths/grade-12/differential-calculus/equation/a38b82db1bc7d583f1ba7a734892e486.png",
}

export default AQuestion
