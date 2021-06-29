import React, { useState } from "react";
import "./App.css";

import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];

  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <Button setter={setCount} />
      </div>
      <div>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          decrement
        </button>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
