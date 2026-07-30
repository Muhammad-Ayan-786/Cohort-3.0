import { HeartHandshake, ShieldCheck, Sparkles } from "lucide-react"

const About = () => {
  return (
    <div className="space-y-8">
      <section className="rounded-4xl border border-white/10 bg-linear-to-br from-zinc-900 via-zinc-900 to-rose-950/70 p-8 shadow-2xl shadow-black/20 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-3 py-1 text-sm font-semibold text-rose-200">
              <Sparkles size={16} />
              Our story
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Designed to make everyday shopping feel calm and delightful.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              Nova Store blends thoughtful design, curated products, and customer-first service to
              create an experience that feels as good as it looks.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <div className="flex items-center gap-3">
              <HeartHandshake size={20} className="text-rose-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
                Why we exist
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xl font-semibold text-white">Thoughtful curation</p>
                <p className="mt-1 text-sm text-zinc-400">We choose products that bring comfort, function, and style together.</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="text-xl font-semibold text-white">Reliable support</p>
                <p className="mt-1 text-sm text-zinc-400">From checkout to delivery, we make every step feel easy and trustworthy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Quality first", text: "We prioritize durable, well-made items you can enjoy for years." },
          { title: "Customer care", text: "Friendly service that listens, supports, and solves with care." },
          { title: "Designed for you", text: "Every detail is styled to be simple, modern, and inspiring." },
        ].map((item) => (
          <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-zinc-950/60 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/10 text-rose-300">
              <ShieldCheck size={18} />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default About