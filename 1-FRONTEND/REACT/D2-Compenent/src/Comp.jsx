const Comp = (prop) => {

  // Empty "prop" is "undefined"

  console.log(prop)

  return (
    <section>
      <h2>Hi, I am component</h2>
      {prop.element /* BUT u can't do this: <Element /> */}
      {prop.children}
    </section>
  )
}

export default Comp