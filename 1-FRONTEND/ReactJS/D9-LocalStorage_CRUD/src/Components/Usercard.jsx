import React from "react";

const Usercard = ({ setToggle, user, deleteUser, setUpdatedUser }) => {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(99,102,241,0.15)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-500 via-cyan-400 to-fuchsia-400" />
      <div className="relative flex flex-col gap-3">
        <div className="relative h-44 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
          <img className="h-full w-full object-cover" src={user.image} alt={user.name} />
          <div className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-600 backdrop-blur-sm">
            Profile
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-slate-800">{user.name}</h1>
          <p className="text-sm text-slate-600">{user.email}</p>
          <p className="text-sm font-medium text-slate-500">{user.contact}</p>
        </div>

        <div className="mt-2 flex w-full justify-between gap-3">
          <button
            onClick={() => {
              setUpdatedUser(user);
              setToggle((prev) => !prev);
            }}
            className="rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-700 transition hover:-translate-y-0.5 hover:bg-amber-100"
          >
            Update
          </button>
          <button
            onClick={() => deleteUser(user.id)}
            className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:-translate-y-0.5 hover:bg-rose-100"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;