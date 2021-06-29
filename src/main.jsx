import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { CounterProvider } from "./contexts/CounterContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
