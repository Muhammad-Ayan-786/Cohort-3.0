import React, { useState } from 'react'
import Batching from './Batching'
import CardData from './CardData'

const App = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png'
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22.3,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png'
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png'
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      category: "men's clothing",
      image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png'
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png'
    },
    {
      id: 6,
      title: 'Solid Gold Petite Micropave',
      price: 168,
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png'
    },
    {
      id: 7,
      title: 'White Gold Plated Princess',
      price: 9.99,
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png'
    },
    {
      id: 8,
      title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
      price: 10.99,
      category: 'jewelery',
      image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png'
    },
    {
      id: 9,
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
      price: 64,
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png'
    },
    {
      id: 10,
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: 109,
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png'
    },
    {
      id: 11,
      title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
      price: 109,
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png'
    },
    {
      id: 12,
      title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
      price: 114,
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_t.png'
    },
    {
      id: 13,
      title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
      price: 599,
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_t.png'
    },
    {
      id: 14,
      title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED',
      price: 999.99,
      category: 'electronics',
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_t.png'
    },
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_t.png'
    },
    {
      id: 16,
      title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_t.png'
    },
    {
      id: 17,
      title: 'Rain Jacket Women Windbreaker Striped Climbing Raincoats',
      price: 39.99,
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png'
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png'
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png'
    },
    {
      id: 20,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      category: "women's clothing",
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png'
    }
  ])

  const removeProduct = (id) => {
    setProductData(productData.filter(product => product.id != id))
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_28%),linear-gradient(135deg,#020617_0%,#0f172a_100%)] px-6 py-8 text-slate-100 sm:px-8 lg:px-12 lg:py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="rounded-[36px] border border-white/10 bg-slate-950/70 p-8 shadow-[0_20px_100px_-35px_rgba(2,8,23,0.95)] backdrop-blur-xl sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
                React rendering playground
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Concept meets UI.
              </h1>
              <p className="mt-4 text-lg leading-8 text-slate-400">
                One page for understanding batching and another for rendering product data with a premium, modern feel.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <span className="block text-xs uppercase tracking-[0.25em] text-slate-500">Concepts</span>
                <span className="mt-1 block text-lg font-semibold text-white">3 update types</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <span className="block text-xs uppercase tracking-[0.25em] text-slate-500">Products</span>
                <span className="mt-1 block text-lg font-semibold text-white">{productData.length} cards</span>
              </div>
            </div>
          </div>
        </section>

        <Batching />

        <section className="rounded-[36px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_100px_-35px_rgba(2,8,23,0.95)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">Product showcase</p>
              <h2 className="text-3xl font-semibold text-white">Beautifully rendered data</h2>
              <p className="mt-2 max-w-2xl text-slate-400">
                This section uses the same polished layout language as the batching cards, so both ideas look like part of one experience.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
              <span className="text-slate-500">Showing</span> <span className="font-semibold text-white">{productData.length} ready-to-shop items</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {productData.map((product) => (
              <CardData key={product.id} product={product} onDelete={removeProduct} />
            ))}
          </div>
        </section>
      </div>
    </div >
  )
}

export default App


// setProductData((prev) => prev.filter((product) => product.id !== id)) 