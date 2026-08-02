const Filters = ({ setSearchParams }) => {

  return (
    <div className="bg-white p-5 border border-zinc-200 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 items-center">
      <div className="flex gap-2 w-full">
        <input
          onChange={(e) => setSearchParams(e.target.value)}
          className="p-3 bg-zinc-50 border border-zinc-200 w-full rounded-xl outline-none focus:ring-2 focus:ring-purple-500 transition"
          type="text"
          placeholder="Search products..."
        />
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition duration-300 font-semibold shadow-md hover:shadow-purple-500/20">
          Search
        </button>
      </div>

      <div className="w-full md:w-auto flex items-center gap-3">
        <span className="text-sm font-medium text-zinc-600 whitespace-nowrap">Filter by:</span>
        <select className="p-3 bg-zinc-50 border border-zinc-200 text-zinc-700 outline-none rounded-xl focus:ring-2 focus:ring-purple-500 transition w-full md:w-40">
          <option value="all">All Categories</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
    </div>
  )
}

export default Filters;