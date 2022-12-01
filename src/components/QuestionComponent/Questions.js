
import './Question.css'
import Question from "./Question"
import Filter from '../../filter/filter'


const Questions = () => {
  return (
    <div className="questions">
      <div className="question-filers-container">
        <Filter title={"Time"} defaultSelect={"New"} />
        <Filter title={"Seen"} defaultSelect={'false'} />
        <Filter title={"Grade"} defaultSelect={"All"} />
        <Filter title={"Subject"} defaultSelect={"All"} />
      </div>
      <div id="questions">
        <div>
          <Question />
        </div>
        <div>
          <Question />
        </div>
        <div>
          <Question />
        </div>
      </div>
    </div>
  );
}

export default Questions
