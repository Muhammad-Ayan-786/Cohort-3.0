const Contact = () => {
  return (
    <div className='min-h-[calc(100vh-150px)] flex items-center justify-center'>
      <div className='bg-linear-to-br from-slate-800 to-slate-700 rounded-2xl shadow-2xl p-12 max-w-md w-full border border-slate-600'>
        <h1 className='text-5xl font-bold mb-8 text-center bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>Contact Us</h1>
        <form className='space-y-6'>
          <div>
            <label className='block text-slate-300 font-semibold mb-2'>Name</label>
            <input type='text' placeholder='Your name' className='w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors' />
          </div>
          <div>
            <label className='block text-slate-300 font-semibold mb-2'>Email</label>
            <input type='email' placeholder='your@email.com' className='w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors' />
          </div>
          <div>
            <label className='block text-slate-300 font-semibold mb-2'>Message</label>
            <textarea placeholder='Your message here...' rows='4' className='w-full bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-600 focus:border-blue-500 focus:outline-none transition-colors resize-none'></textarea>
          </div>
          <button type='submit' className='w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact