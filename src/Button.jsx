import React from "react";
import { useCount } from "./contexts/CounterContext";

function Button() {
  const { increment } = useCount();

  return <button onClick={increment}>increment</button>;
}

export default Button;
