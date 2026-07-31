export const DetailSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Skeleton */}
        <div className="aspect-square bg-white/5 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
        </div>

        {/* Content Skeleton */}
        <div className="flex flex-col gap-4">
          <div className="h-8 w-3/4 bg-white/5 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          </div>
          <div className="h-6 w-1/4 bg-white/5 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          </div>
          <div className="h-10 w-1/3 bg-white/5 rounded relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="h-4 w-full bg-white/5 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
            <div className="h-4 w-5/6 bg-white/5 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <div className="h-12 w-24 bg-white/5 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
            <div className="h-12 w-40 bg-white/5 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
