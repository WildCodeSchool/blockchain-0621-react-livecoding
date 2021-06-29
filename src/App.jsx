import React, { useState, useEffect, useRef } from "react";
import "./App.css";

import Button from "./Button";
import Counter from "./Counter";
import TodoItem from "./TodoItem";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [displayCounter, setDisplayCounter] = useState(true);

  // const state = useState(0);
  // const count = state[0];
  // const setCount = state[1];

  const increment = React.useCallback(
    () => setCount((prevState) => prevState + 1),
    [setCount]
  );
  const decrement = () => setCount((prevState) => prevState - 1);

  const handleChange = (e) => setInputValue(e.target.value);

  useEffect(() => {
    console.log("first render");

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((todos) => {
        setTodos(todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log("new render", { count });
  }, [count, inputValue]);

  useEffect(() => {
    if (count === 8) {
      setDisplayCounter(false);
    }

    return () => {
      console.log("did unmount in App with count");
    };
  }, [count]);

  useEffect(() => {
    console.log("new render", { inputValue });
  }, [inputValue]);

  return (
    <>
      {displayCounter && <Counter count={count} />}
      <div>
        <Button setter={setCount} toto="toto" tutu="tutu" tata="tata" />
      </div>
      <div>
        <button onClick={decrement}>decrement</button>
      </div>
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>

      <div>
        <ul>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} title={todo.title} />;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
