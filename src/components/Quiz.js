import { useState } from "react";
import Next from "./Next";
import Options from "./Options";
import Question from "./Question";
import Result from "./Result";

const correctAnswer = ["Draupadi", "Elon Musk", "Modi", "Joe Biden"];

const options = [
  ["Rajnath", "Kovind", "Pratibha", "Draupadi"],
  ["Garry", "Elon Musk", "Ragy", "jeff"],
  ["Modi", "Amit Shah", "Rajnath Singh", "Kamal Hasan"],
  ["Harry", "Pablo", "Deepak", "Joe Biden"],
];

const Quiz = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(-1);
  var initialSelectedOptions = [];
  correctAnswer.forEach((each) => {
    initialSelectedOptions = [...initialSelectedOptions, -1];
  });
  const [submittedOptions, setSubmittedOptions] = useState(
    initialSelectedOptions
  );
  if (selectedQuestion !== correctAnswer.length)
    return (
      <div className="quiz">
        <Question selectedQuestion={selectedQuestion} />
        <Options
          selectedQuestion={selectedQuestion}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          submittedOptions={submittedOptions}
          setSubmittedOptions={setSubmittedOptions}
        />
        <Next
          selectedQuestion={selectedQuestion}
          updateSelectedQuestion={setSelectedQuestion}
          submittedOptions={submittedOptions}
          correctAnswer={correctAnswer}
        />
      </div>
    );
  else {
    return (
      <Result
        correctAnswer={correctAnswer}
        submittedOptions={submittedOptions}
        options={options}
      />
    );
  }
};

export default Quiz;
