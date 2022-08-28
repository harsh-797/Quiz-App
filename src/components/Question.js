const questions = [
  "Who is the president of India",
  "Who is the CEO of Tesla",
  "Who is the PM of  India",
  "Who is the president of USA",
];

const Question = (props) => {
  for (let i = 0; i < questions.length; ++i) {
    if (i === props.selectedQuestion) {
      return <div className="question">{questions[i] + " ?"}</div>;
    }
  }
};

export default Question;
