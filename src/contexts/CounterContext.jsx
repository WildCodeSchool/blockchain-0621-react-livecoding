import React, { createContext, useState, useContext } from "react";

export const counterContext = createContext(null);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}

export function useCount() {
  const ctx = useContext(counterContext);

  const decrement = () => ctx.setCount((prevState) => prevState - 1);
  const increment = () => ctx.setCount((prevState) => prevState + 1);

  return {
    ...ctx,
    increment,
    decrement,
  };
}
