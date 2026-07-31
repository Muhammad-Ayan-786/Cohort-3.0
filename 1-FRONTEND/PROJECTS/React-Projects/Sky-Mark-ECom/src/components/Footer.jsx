const Footer = () => {
  return (
    <footer className="border-t border-stone-900/60 py-10 text-center mt-12 bg-[#090909]">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight select-none">
          <span className="text-white">
            Sky<span className="text-volt">Mart</span>
          </span>
        </div>
        <span className="text-stone-600 text-xs font-semibold">
          &copy; {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>)
}

export default Footer