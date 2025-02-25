import MovieCard from "./MovieCard";

const TopRatedMovies = ({ topRatedMovies }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
      <div id="topRatedMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {topRatedMovies &&
          topRatedMovies.length > 0 &&
          topRatedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </section>
  );
};

export default TopRatedMovies;
