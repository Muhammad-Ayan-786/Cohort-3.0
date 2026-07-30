import { useContext, useEffect, useState } from "react"
import { ProductStore } from "../context/ProductContext"

const StoreSearchBar = () => {

  const {
    fetchAllData,
    allCategories,
    searchQuery, setSearchQuery,
    category, setCategory,
    sortOption, setSortOption
  } = useContext(ProductStore)

  const clearSearching = () => {
    setSearchQuery('')
    setCategory('all')
    setSortOption('default')
  }


  useEffect(() => {
    fetchAllData()
  }, [])

  return (
    <div className="bg-[#111] border border-white/8 rounded-2xl p-4 mb-6">

      <div className="flex flex-col sm:flex-row gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="field pl-10 pr-8 h-10 w-full"
          />

          {searchQuery !== ''
            &&
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          }

        </div>

        {/* Categories */}
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="field h-10 pr-8 appearance-none cursor-pointer min-w-40"
          >
            <option value="all">All Categories</option>
            {allCategories.length > 0 && allCategories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="field h-10 pr-8 appearance-none cursor-pointer min-w-45"
          >
            <option value="default">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="rating-desc">Top Rated</option>
            <option value="rating-asc">Lowest Rated</option>
          </select>

          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none">
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </div>

        {/* Clear button */}
        {(searchQuery.trim() !== '' || category !== 'all' || sortOption !== 'default') &&
          <button
            onClick={() => clearSearching()}
            className="flex items-center gap-1.5 text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/15 border border-red-500/20 px-4 h-10 rounded-2xl text-sm font-body transition-all shrink-0 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
            Clear
          </button>
        }

      </div>

      {/* Show Searching */}
      <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/6">
        {searchQuery.trim() !== '' &&
          // Searched Query
          <span className="badge bg-volt/10 text-volt border border-volt/20 text-xs gap-1">
            "{searchQuery}"
            <button>
              <svg
                onClick={() => setSearchQuery('')}
                xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x cursor-pointer"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </span>
        }
        {
          category !== 'all' &&
          // Selected Category
          <span className="badge bg-volt/10 text-volt border border-volt/20 text-xs gap-1">
            "{category}"
            <button>
              <svg
                onClick={() => setCategory('all')}
                xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x cursor-pointer"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </span>
        }
        {
          sortOption !== 'default' &&
          // Selected Sort
          <span className="badge bg-volt/10 text-volt border border-volt/20 text-xs gap-1">
            "{sortOption}"
            <button>
              <svg
                onClick={() => setSortOption('default')}
                xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x cursor-pointer"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </span>
        }
      </div>

    </div>
  )
}

export default StoreSearchBar