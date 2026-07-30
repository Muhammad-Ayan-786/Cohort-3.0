import { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("Hey I'm interval in About");
  }, 1000);

  useEffect(() => {
    console.log("About is rendering");

    /* Only use when ur component leaks some memory
    and if u want to track any updates */
    return () => {
      clearInterval(interval);
    }
  }, [])


  return (
    <div className="border-4 border-blue-800 bg-sky-400 p-4 rounded-xl font-bold text-xl uppercase tracking-wide mt-6">
      <h1>About</h1>
    </div>
  )
}

export default About