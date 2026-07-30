import { useEffect, useState } from "react"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Axios from "./Components/Axios";

const App = () => {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(true)

  useEffect(() => { // Asynchronous
    console.log("App is rendering");
  }, [toggle])


  return (
    <div className="w-screen h-screen bg-rose-400 text-white p-8">
      <h1 className="text-3xl">Count - {count}</h1>
      <h1 className="text-3xl">Toggle - {toggle.toString()}</h1>

      <div className="flex gap-4 mt-5">
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>

      <Axios />

      {toggle ? <Contact /> : <About />}

    </div>
  )
}

export default App