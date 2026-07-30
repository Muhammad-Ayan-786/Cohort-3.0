import React from 'react'

const About = () => {
  console.log("About rendering ...");


  return (
    <div>
      <h1>About this side</h1>
    </div>
  )
}

export default React.memo(About)