import React, { useEffect } from "react";
import { useCount } from "./contexts/CounterContext";

function Counter() {
  const { count } = useCount();
  useEffect(() => {
    console.log("Counter re-render");
  });

  useEffect(() => {
    console.log("did mount");

    return () => {
      console.log("component unmount");
    };
  }, []);

  return <div>count: {count}</div>;
}

export default Counter;
