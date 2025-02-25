import MovieCard from "../Home/MovieCard";

const SimilarMovieList = async ({ similarMoviePromise }) => {
  const similarData = await similarMoviePromise;
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {similarData.results &&
        similarData.results.length > 0 &&
        similarData.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default SimilarMovieList;
