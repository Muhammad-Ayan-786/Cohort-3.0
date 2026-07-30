const Users = ({ setToggle, users, del }) => {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.20),transparent_35%),linear-gradient(135deg,#f8fbff_0%,#eef4ff_45%,#fdf2ff_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">

        {/* Header */}
        <header className="relative overflow-hidden rounded-4xl border border-white/70 bg-slate-900/90 px-6 py-8 text-white shadow-[0_30px_80px_-25px_rgba(15,23,42,0.75)] backdrop-blur-xl sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.28),transparent_40%)]" />
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
                Community Hub
              </p>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Meet the people</h1>
              <p className="mt-3 text-lg text-slate-300">
                A polished gallery of your registered users, designed to feel premium and effortless.
              </p>
            </div>
            <button
              onClick={() => setToggle(prev => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white cursor-pointer transition duration-300 hover:bg-white/20"
            >
              Register User
            </button>
          </div>

          <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-300">Total Users</p>
              <p className="mt-2 text-2xl font-semibold">{users.length}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-300">Member Status</p>
              <p className="mt-2 text-2xl font-semibold">Verified</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-slate-300">Freshly Joined</p>
              <p className="mt-2 text-2xl font-semibold">Live</p>
            </div>
          </div>
        </header>

        {/* User's Cards */}
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {users.map((user, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/80 p-4 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.35)] backdrop-blur"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-violet-500/10 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex flex-col gap-4">
                <div className="relative h-64 overflow-hidden rounded-[1.25rem]">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">{user.name}</h3>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                      Active
                    </span>
                  </div>
                  <p className="text-sm font-medium text-sky-600">{user.email}</p>
                  <p className="text-sm leading-6 text-slate-600">{user.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">Member since 2026</span>
                  <button
                    onClick={() => del(user.id)}
                    className="cursor-pointer rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition duration-300 hover:border-slate-400 hover:bg-slate-50"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Users