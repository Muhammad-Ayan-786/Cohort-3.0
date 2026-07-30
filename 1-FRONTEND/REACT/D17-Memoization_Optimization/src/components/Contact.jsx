import React from 'react'

const Contact = ({ users }) => {
  console.log("Contact rendering ...");

  return (
    <div>
      <h1>Contact this side</h1>
    </div>
  )
}

export default React.memo(Contact, (prevprops, nextprops) => {
  return prevprops.users.id === nextprops.users.id
  /*
  You can track any property, and control the re-rendering by returning true or false

  So -> callback in React.memo help to re-render in a particular individual value
  */
})