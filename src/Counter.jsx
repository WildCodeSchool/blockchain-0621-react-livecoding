import React, { useEffect } from "react";

function Counter({ count }) {
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
