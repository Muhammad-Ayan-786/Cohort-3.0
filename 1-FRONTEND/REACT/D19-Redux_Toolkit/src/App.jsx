import { useSelector, useDispatch } from 'react-redux'
import { increment } from './features/counterSlice'

const App = () => {

  const { count } = useSelector((store) => store.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux Toolkit</h1>

      <h2>Count - {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default App