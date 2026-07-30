import React from 'react'
import Comp from './Comp'

const App = () => {

  /*
  "hmr" in Vite Bundler, shows the terminal
  • In the Vite bundler, HMR stands for Hot Module Replacement.
  • It is a development feature that updates modules in your running application (such as React or Vue components) instantly when you save your code, without requiring a full page refresh
  */

  const ui = React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello"),
    React.createElement("h2", {}, "Bye"),
    React.createElement("h3", {}, "React"),
  ])

  /*
  <div>
    <h1>Hello</h1>
    <h2>Bye</h2>
    <h3>React</h3>
  </div>

  BTS, this HTML code is getting converted to whatever
  code is stored in "ui" by the help of Babel.
  */

  return (
    <div>
      <h1>Hello</h1>
      <h2>Bye</h2>
      <h3>React</h3>
      <Comp name="React" element={<h1>Element as a child</h1>}>
        <h1>I'm Component's children</h1>
      </Comp>
    </div>
  )
}

export default App