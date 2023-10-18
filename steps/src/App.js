import "./App.css";

const message = ["Learn React *", "Build Projects **", "Apply for Jobs"];

export default function App() {
  const btnStyle={ backgroundColor: "#7950f2", color: "#fff" }
  const step = 1;

  function handlePrevious(){
    alert('previous')

  }

  function handleNext(){
    alert('Next')
  }


  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
        Step {step} : {message[step - 1]}
      </p>
      <div className="buttons">
        <button style={btnStyle}
        onClick={handlePrevious}>
          Previous
        </button>
        <button style={btnStyle}
        onClick={handleNext}
        >Next</button>
      </div>
    </div>
  );
}
