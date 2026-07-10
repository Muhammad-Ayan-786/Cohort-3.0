import React from "react";

const Usercard = ({ setToggle, user, deleteUser }) => {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-fuchsia-950 p-4 shadow-[0_15px_60px_rgba(15,23,42,0.6)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_90px_rgba(129,140,248,0.3)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_45%)]" />
      <div className="relative flex flex-col gap-3">
        <div className="relative h-44 overflow-hidden rounded-[1.25rem] border border-white/10">
          <img className="h-full w-full object-cover" src={user.image} alt={user.name} />
          <div className="absolute left-3 top-3 rounded-full border border-cyan-400/30 bg-cyan-500/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-100">
            Featured
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-white">{user.name}</h1>
          <p className="text-sm text-slate-300">{user.email}</p>
          <p className="text-sm text-slate-400">{user.contact}</p>
        </div>

        <div className="mt-2 flex w-full justify-between gap-3">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="rounded-2xl bg-linear-to-r from-amber-500 to-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:scale-105"
          >
            Update
          </button>
          <button
            onClick={() => deleteUser(user.id)}
            className="rounded-2xl bg-linear-to-r from-rose-500 to-red-600 px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition hover:scale-105"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;