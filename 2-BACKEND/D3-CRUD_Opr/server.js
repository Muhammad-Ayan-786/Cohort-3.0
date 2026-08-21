const express = require('express')
const app = express()

// middleware for accepting json data
app.use(express.json())

const port = 3000


let users = []

// Get route
app.get('/', (req, res) => {
  res.send(users)
})

// Post route
app.post('/create', (req, res) => {
  let body = req.body

  users.push(body)

  res.send("User created successfully !!!")

})

// Update route
app.put('/update/:id', (req, res) => {
  let { id } = req.params
  let { name } = req.body

  let updatedUsers = users.map(user => (
    (user.id === id) ? { ...user, name } : user
  ))

  users = updatedUsers

  res.send("User updated successfully !!!")
})


// Delete route
app.delete('/delete/:id', (req, res) => {
  let { id } = req.params

  users = users.filter(user => user.id != id)

  res.send("User deleted successfully !!!")
})


app.listen(port, () => {
  console.log(`Server is running on port ${port} `);
})