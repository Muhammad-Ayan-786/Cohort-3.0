console.log(window); // The global object of the browser
console.log(React); // The global object of React
console.log(ReactDOM); // The global object of ReactDOM

/* Creating, texting, and rendering in JS */
const h1 = document.createElement('h1') // tag
h1.textContent = "Welcome from Real DOM (JS)" // text
document.body.append(h1) // render

console.log("Real DOM ->", h1)


/* Creating, texting, and rendering in React */
const rh1 = React.createElement(
  "h1", // tag
  { className: 'box' }, // attributes
  "Welcome from Virtual DOM (React)" // children
)

console.log("Virtual DOM ->", rh1)


const realDOMElem = document.querySelector("#root") // Real DOM element

const rootOfReact = ReactDOM.createRoot(realDOMElem) // ReactDOM root
rootOfReact.render(rh1) // render



// Nested Elements
const nestedElem = React.createElement(
  "h2", // tag
  null, // attributes
  React.createElement("span", {}, "I'm under h1") // children
)

// Sibling Elements
const siblingElem = React.createElement(
  "div", // tag
  null, // attributes
  [
    React.createElement("h3", null, "I'm under div"),
    React.createElement("p", null, "I'm also under div")
  ]
)