import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {
  let [counter, setCounter] = useState(0)
  console.log(counter);

  /* setCounter(counter + 1)  
      - Don't do this (it will recursively call App()) 
  */

  let [flag, setFlag] = useState(true)
  console.log(flag);

  return (
    <div className='app-shell'>
      <div className='app-inner'>
        <Navbar />

        <section className='app-hero'>
          <div className='app-intro'>
            <span className='app-badge'>React State Showcase</span>
            <h1 className='app-title'>A premium, animated experience for your simple state demo.</h1>
            <p className='app-desc'>The same logic is preserved, but the presentation now feels polished, modern, and visually captivating.</p>
          </div>

          <div className='app-cards'>
            <div className='app-card'>
              <h2 className='app-card-title'>Counter</h2>
              <p className='app-card-value'>{counter}</p>

              <button
                className='app-button'
                onClick={() => {
                  setCounter(counter + 1)
                }}
              >
                Increment
              </button>
            </div>

            <div className='app-card'>
              <h2 className='app-card-title'>Flag Status</h2>
              <p className='app-card-value'>{flag ? 'True 🏳️' : 'False 🏴'}</p>
              <button
                className='app-button'
                onClick={() => {
                  setFlag(false)
                }}
              >
                Toggle
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App


/*
<========== setFunction's Job ==========>
  1. Change it's own state value
  2. Re-renders it's parent function component 

setFunction must also be in an Event Handler OTHERWISE :
  1. It will call App() recursively
  2. And at last gives an Error:
    - Too many re-renders. React limits the number of
    renders to prevent an infinite loop.

<========== setFunction Rules : ==========>

  Case 1:
    [flag, setFlag] = useState(true)
    btn.onclick(() => setFlag(true))
    
    - No re-render (not even a single one)

  Case 2:
    [flag, setFlag] = useState(true)
    btn.onclick(() => setFlag(false))
    
    - (1 Click) -> 1 re-renders (change false = false)
    - (2 Click) -> 1 more re-renders (just to recheck)
    - (3, 4, 5, ...) -> No re-renders
*/