const Result = (props) => {
  var score = 0;
  console.log(props.correctAnswer);
  console.log(props.submittedOptions);
  props.submittedOptions.forEach((each, ind) => {
    console.log(each);
    if (props.options[ind][each] === props.correctAnswer[ind]) score++;
  });
  return (
    <div className="result">
      Your score is {score} out of {props.correctAnswer.length}
    </div>
  );
};

export default Result;
