const MovieGenres = () => {
  return (
    <div className="mb-6">
      <h3 className="text-gray-400 mb-2">Genres</h3>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
          Horror{" "}
        </span>
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
          Mystery
        </span>
      </div>
    </div>
  );
};

export default MovieGenres;
