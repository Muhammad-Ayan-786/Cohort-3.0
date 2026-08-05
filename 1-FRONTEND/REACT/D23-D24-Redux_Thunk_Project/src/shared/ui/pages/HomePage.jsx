import React from 'react';
import { useNavigate } from 'react-router';

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <section className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 p-16 text-center shadow-sm">
        <h1 className="relative text-7xl font-black mb-6 tracking-tighter text-gray-900">
          HyperCart Portal
        </h1>
        <p className="relative text-xl text-gray-600 max-w-xl mx-auto mb-10">
          The premium marketplace for next-gen digital experiences. Built with velocity and style.
        </p>
        <button
          onClick={() => navigate('/main/products')}
          className="relative px-8 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-gray-800 transition cursor-pointer"
        >
          Explore Collection
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
        {['Secure', 'Lightning Fast', 'Premium'].map((item) => (
          <div key={item} className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 transition">
            <div className="w-12 h-12 bg-gray-100 rounded-xl mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">{item}</h3>
            <p className="text-sm text-gray-600">Premium quality assurance for all your digital goods.</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default HomePage;