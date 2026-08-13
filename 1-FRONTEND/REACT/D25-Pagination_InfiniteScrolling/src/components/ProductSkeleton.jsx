import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  )
}

export default ProductSkeleton