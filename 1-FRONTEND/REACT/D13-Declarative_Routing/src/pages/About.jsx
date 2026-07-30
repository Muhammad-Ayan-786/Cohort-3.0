import React from 'react'

const About = () => {
  return (
    <div className='min-h-[calc(100vh-150px)] flex items-center justify-center'>
      <div className='bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-12 max-w-2xl border border-slate-600'>
        <h1 className='text-5xl font-bold mb-6 bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>About Us</h1>
        <div className='text-slate-300 space-y-4 text-lg leading-relaxed'>
          <p>Welcome to RouteHub, a modern routing demonstration project built with React Router v7 and Vite.</p>
          <p>This application showcases declarative routing patterns, nested routes, and dynamic navigation.</p>
          <div className='mt-6 p-4 bg-slate-700 rounded-lg border border-slate-600'>
            <h2 className='text-xl font-semibold text-blue-400 mb-2'>Features:</h2>
            <ul className='space-y-2 list-disc list-inside text-slate-300'>
              <li>Declarative routing with React Router</li>
              <li>Nested routes with Outlet</li>
              <li>Dynamic navigation with useNavigate</li>
              <li>Modern UI with Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About