import { useEffect } from "react";

const options = [
  ["Rajnath", "Kovind", "Pratibha", "Draupadi"],
  ["Garry", "Elon Musk", "Ragy", "jeff"],
  ["Modi", "Amit Shah", "Rajnath Singh", "Kamal Hasan"],
  ["Harry", "Pablo", "Deepak", "Joe Biden"],
];

const setAnswer = (
  setSubmittedOptions,
  submittedOptions,
  questionNumber,
  ind
) => {
  const tempSubmittedOptions = submittedOptions;
  tempSubmittedOptions[questionNumber] = ind;
  setSubmittedOptions(tempSubmittedOptions);
};

const Options = (props) => {
  var allOptions = [];
  options[props.selectedQuestion].forEach((each, ind) => {
    const optionId = "option" + ind;
    allOptions.push(
      <div
        onClick={(e) => {
          if (props.selectedOption !== -1) {
            const previousSeletedOption = document.getElementById(
              "option" + props.selectedOption
            );
            previousSeletedOption.classList.remove("selectedOption");
            previousSeletedOption.classList.add("eachOption");
          }
          props.setSelectedOption(ind);
          setAnswer(
            props.setSubmittedOptions,
            props.submittedOptions,
            props.selectedQuestion,
            ind
          );
        }}
        className="eachOption"
        id={optionId}
      >
        {ind + 1 + ". " + each}
      </div>
    );
  });
  useEffect(() => {
    if (props.selectedOption !== -1) {
      const currentSelectedOption = document.getElementById(
        "option" + props.selectedOption
      );
      currentSelectedOption.classList.remove("eachOption");
      currentSelectedOption.classList.add("selectedOption");
    }
  }, [props.selectedOption]);

  useEffect(() => {
    if (props.selectedOption !== -1) {
      const previousSeletedOption = document.getElementById(
        "option" + props.selectedOption
      );
      previousSeletedOption.classList.remove("selectedOption");
      previousSeletedOption.classList.add("eachOption");
      props.setSelectedOption(-1);
    }
  }, [props.selectedQuestion]);

  return <div className="options">{allOptions}</div>;
};

export default Options;
