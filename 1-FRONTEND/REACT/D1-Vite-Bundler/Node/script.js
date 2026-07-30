import React from "react";
import ReactDOM from "react-dom/client";

console.log(React)

const root = document.querySelector("#root");

const h1 = React.createElement(
  "h1",
  {},
  "Welcome from (React)"
)

console.log(h1)

ReactDOM.createRoot(root).render(h1);