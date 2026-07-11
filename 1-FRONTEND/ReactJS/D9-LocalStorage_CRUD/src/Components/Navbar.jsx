const Navbar = ({ setToggle }) => {
  return (
    <div className="sticky top-3 z-10 rounded-[1.5rem] border border-slate-200/80 bg-white/85 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-violet-600 via-indigo-500 to-cyan-400 text-lg font-black text-white shadow-[0_12px_25px_rgba(99,102,241,0.25)]">
            U
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
              Studio
            </p>
            <p className="text-base font-semibold text-slate-800">User Studio</p>
          </div>
        </div>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-violet-100"
        >
          + Create user
        </button>
      </div>
    </div>
  );
};

export default Navbar;