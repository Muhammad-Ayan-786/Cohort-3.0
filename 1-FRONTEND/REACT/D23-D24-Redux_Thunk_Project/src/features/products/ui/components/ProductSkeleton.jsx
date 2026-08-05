import React from 'react'

const ProductSkeleton = () => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="h-56 w-full rounded-lg bg-gray-200 mb-4"></div>

      {/* Details Skeleton */}
      <div className="flex flex-col gap-2">
        <div className="h-4 w-1/3 rounded bg-gray-200"></div>
        <div className="h-6 w-3/4 rounded bg-gray-200"></div>
        <div className="h-4 w-full rounded bg-gray-200"></div>
        <div className="mt-4 flex items-center justify-between">
          <div className="h-8 w-1/4 rounded bg-gray-200"></div>
          <div className="h-8 w-1/4 rounded bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton