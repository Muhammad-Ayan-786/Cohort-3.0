import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { MyStore } from './Context/MyContext'
import Navbar from './Components/Navbar'
import ProductCards from './Components/ProductCards'
import CartScreen from './Screens/CartScreen'

const App = () => {

  const { isCartOpen, cartItems } = useContext(MyStore)

  const [products, setProducts] = useState([])

  const getData = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
    } catch (error) {
      console.log(`Error -> ${data}`);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.34),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_40%,#111827_100%)] px-4 py-5 text-white sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6'>
        <Navbar />

        <main className='rounded-4xl border border-white/10 bg-slate-950/45 p-4 shadow-[0_30px_120px_rgba(2,6,23,0.55)] backdrop-blur-2xl sm:p-6 lg:p-8'>
          {isCartOpen ? (
            <CartScreen />
          ) : (
            <section className='space-y-6'>
              <div className='flex flex-col gap-4 rounded-[1.75rem] border border-cyan-400/20 bg-white/5 p-6 sm:flex-row sm:items-end sm:justify-between'>
                <div className='max-w-2xl'>
                  <p className='mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300'>Premium picks</p>
                  <h2 className='text-3xl font-black tracking-tight text-white sm:text-4xl'>Discover products that feel a little extra.</h2>
                  <p className='mt-3 text-sm leading-7 text-slate-300 sm:text-base'>Browse the catalog and build your dream cart with a fresh, elevated experience.</p>
                </div>

                <div className='rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200'>
                  {products.length} curated items
                </div>
              </div>

              <div className='grid gap-5 xl:grid-cols-2'>
                {products.map(elem => {
                  let elemInCart = cartItems.find((val) => val.id === elem.id)

                  return <ProductCards key={elem.id} product={elem} elemInCart={elemInCart} />
                })}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  )
}

export default App