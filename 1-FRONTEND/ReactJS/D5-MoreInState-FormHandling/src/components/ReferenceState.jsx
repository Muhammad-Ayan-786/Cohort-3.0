import { useState } from 'react'

const ReferenceState = () => {
  console.log("App is rendering ...")

  let [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: 'Aman'
  })

  return (
    <div className='w-screen h-screen bg-slate-800 text-white text-2xl p-4'>
      <h1>Welcome</h1>
      <h1>Count is - {count}</h1>
      <h1>Name is - {user.name}</h1>

      <button onClick={() => {
        // setCount(count + 1)
        count = count + 1
        setCount(count)
      }}>Increment</button>
      <br />
      <button onClick={() => {
        // Uncomment to see the different behaviour

        /* 1:)
        user.name = 'Rohan'
        setUser(user) // Won't re-render, cuz passing the same reference, & setFunction doesn't re-render when updating the same value
        */

        /* 2:)
        setUser({ name: 'Rohan' }) // This will work & always re-render on click cuz u passing a new reference "{}" every time
        */

        /* 3:)
        user.name = 'Rohan'
        setUser(user) // When u click the button. In the memory, JavaScript will change the value of name in the object, but it won't re-render. When any other state get updated, this changed name will also appear in the UI.
        Eg:
        let [count, setCount] = useState(0)
        const [user, setUser] = useState({name: 'Aman'})

        userChange = () => {user.name = 'Rohan'; setUser(user)}
        countChange = () => {setCount(count + 1)}

        Clicks      ||                  Memory                          ||          UI
        userChange  ||  JS will change {name:'Aman'} to {name:'Rohan'}  ||    count 0 & user Aman
        countChange ||  count 1                                         ||    count 1 & user Rohan
        */

        user.name = 'Rohan'
        setUser(user)
      }}>Change Name</button>
    </div>
  )
}

export default ReferenceState