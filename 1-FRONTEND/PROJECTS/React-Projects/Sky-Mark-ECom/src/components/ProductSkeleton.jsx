export const ProductSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-white/5 rounded-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Category Skeleton */}
      <div className="h-3 w-1/3 bg-white/5 rounded relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Title Skeleton */}
      <div className="h-4 w-full bg-white/5 rounded relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Rating & Price Skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-1/4 bg-white/5 rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>
        <div className="h-4 w-1/5 bg-white/5 rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};
