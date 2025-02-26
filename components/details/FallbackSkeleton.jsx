const FallbackSkeleton = () => {
  return (
    <div className="flex space-x-4 overflow-hidden">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="w-40 h-60 bg-gray-800 animate-pulse rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default FallbackSkeleton;
