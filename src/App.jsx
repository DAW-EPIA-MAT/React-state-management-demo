import { useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
const App = () => {
  const [score, setScore] = useState(0);

  const handleIncrease = () => {
    setScore((prevScore) => {
      return prevScore + 1;
    });
  };

  const handleDecrease = () => {
    setScore((prevScore) => {
      return prevScore - 1;
    });
  };

  return (
    <div className="wrapper">
      <h1>State management</h1>
      <div className="counter__card">
        <button
          className="counter__button counter__button--primary"
          onClick={handleIncrease}
        >
          Increase
        </button>
        <Counter count={score} />
        <button
          onClick={handleDecrease}
          className="counter__button counter__button--secondary"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default App;
