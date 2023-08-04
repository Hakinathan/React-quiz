import Options from "./Options";
import Tag from "./Tag";

function Question({ question, dispatch, answer }) {
  return (
    <div>
      <div className="question-header">
        <h4>{question.question}</h4>
        <Tag points={question.points} />
      </div>

      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
