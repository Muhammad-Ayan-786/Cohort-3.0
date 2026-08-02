import React from 'react'

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-extrabold text-zinc-900 mb-6 tracking-tight">
        About <span className="text-yellow-500">SkyDart</span>
      </h1>
      <p className="text-lg text-zinc-600 leading-relaxed mb-10">
        Welcome to SkyDart, your premier destination for quality products and exceptional service.
        We are committed to bringing you the best shopping experience, combining convenience with
        a curated selection of items designed to enhance your everyday life.
      </p>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {[
          { title: "Quality First", desc: "We handpick every item to ensure the highest standards." },
          { title: "Fast Shipping", desc: "Get your orders delivered quickly and reliably." },
          { title: "Customer Focused", desc: "Your satisfaction is our top priority." }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl">
            <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutPage