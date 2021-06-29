import React from "react";

function Button({ setter }) {
  return (
    <button onClick={() => setter((count) => count + 1)}>increment</button>
  );
}

export default Button;
