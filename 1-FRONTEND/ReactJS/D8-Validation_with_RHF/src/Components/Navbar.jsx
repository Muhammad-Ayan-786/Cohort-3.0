const Navbar = ({ setToggle }) => {
  return (
    <div className="sticky top-3 z-10 rounded-full border border-white/15 bg-slate-950/70 px-4 py-3 shadow-[0_0_40px_rgba(129,140,248,0.18)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-violet-500/30">
            U
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
              Pulse
            </p>
            <p className="text-base font-semibold text-white">User Studio</p>
          </div>
        </div>

        <button
          onClick={() => setToggle((prev) => !prev)}
          className="rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(96,165,250,0.35)] transition hover:scale-105"
        >
          + Create user
        </button>
      </div>
    </div>
  );
};

export default Navbar;