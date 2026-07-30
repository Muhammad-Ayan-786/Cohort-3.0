import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  console.log("App rendering ...");

  const [count, setCount] = useState(0)
  const [users, setUsers] = useState({ id: 789, name: 'Raghav' })

  //* useCallback store reference of the function
  const greetfn = useCallback(() => {
    console.log("Hey, Good evening !");
  }, [])

  //* useMemo hold the value/result of any expensive function
  const calculate = useMemo(() => {
    console.log("Calculating ...");
    let sum = 0
    for (let i = 0; i < 10000000; i++) sum += i
    return sum
  }, [])
  //* Only use when you need to memoize a expensive calcutaion result
  //* calculate returns the value, it's not a function

  return (
    <div>
      <h1>Memoization</h1>

      <h2>Count - {count}</h2>
      <h2>Name - {users.name}</h2>
      <h2>Result - {calculate}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setUsers({ ...users, name: 'Rahul' })}>Change Name</button>

      <Home greet={greetfn} />
      <About greet={greetfn} />
      <Contact users={users} />
    </div>
  )
}

export default App