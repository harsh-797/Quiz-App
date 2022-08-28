const Next = (props) => {
  if (props.selectedQuestion !== props.correctAnswer.length - 1)
    return (
      <div className="next">
        <button
          onClick={(e) =>
            props.updateSelectedQuestion(props.selectedQuestion + 1)
          }
        >
          Next
        </button>
      </div>
    );
  else {
    return (
      <div className="next">
        <button
          onClick={(e) =>
            props.updateSelectedQuestion(props.selectedQuestion + 1)
          }
        >
          Submit
        </button>
      </div>
    );
  }
};

export default Next;
