import React, { useState } from 'react'
import RefForm from './Components/RefForm'
import ReactHookForm from './Components/ReactHookForm'

const App = () => {

  const [toggle, setToggle] = useState(false)



  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col justify-center items-center p-4 overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-linear-to-r from-purple-500 to-cyan-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-r from-indigo-500 to-pink-400 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

      <header className="text-center mb-10 z-10">j
        <h1 className="text-5xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500 tracking-wider">
          FORM HANDLING
        </h1>
        <button
          onClick={() => setToggle(prev => !prev)}
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-white rounded-xl group bg-linear-to-br from-purple-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600 focus:ring-4 focus:outline-none focus:ring-cyan-800"
        >
          <span className="relative px-8 py-3 transition-all ease-in duration-75 bg-[#0a0a0f] rounded-md group-hover:bg-opacity-0">
            {toggle ? "Switch to React Hook Form" : "Switch to useRef Form"}
          </span>
        </button>
      </header>

      <div className="w-full max-w-2xl mx-auto z-10">
        {toggle ? <RefForm /> : <ReactHookForm />}
      </div>
    </div>
  );
}

export default App