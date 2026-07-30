import { useState } from 'react'
import Register from './components/Register'
import Users from './components/Users'

const App = () => {

  const [users, setUsers] = useState([]) // All Users Array-Of-Objects
  const [toggle, setToggle] = useState(false)

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id != id))
  }

  return (
    <div>
      {toggle ?
        <Users users={users} del={deleteUser} setToggle={setToggle} />
        :
        <Register setUsers={setUsers} setToggle={setToggle} />
      }
    </div>
  )
}

export default App