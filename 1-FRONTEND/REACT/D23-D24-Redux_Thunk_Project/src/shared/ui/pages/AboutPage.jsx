import React from 'react'

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-12 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8">
      <h2 className="text-4xl font-black mb-8">Our Vision</h2>
      <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
        <p>
          HyperCart was born from a simple desire: to make digital commerce feel human again.
          We believe in clean interfaces, lightning-fast performance, and absolute transparency.
        </p>
        <p>
          Our mission is to provide a curated marketplace that respects your time and your data.
          No clutter, no noise—just the products you need.
        </p>
      </div>

      <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-gray-900">10k+</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-2">Satisfied Customers</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gray-900">24/7</div>
          <div className="text-sm text-gray-500 uppercase tracking-widest mt-2">Support Team</div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage