import React from "react";

function Button({ setter }) {
  return <button onClick={() => setter((toto) => toto + 1)}>increment</button>;
}

export default Button;
