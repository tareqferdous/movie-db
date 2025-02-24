import MovieCard from "../Home/MovieCard";

const SimilarMovieList = () => {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      <div className="flex w-48 h-[288px] rounded-lg cursor-pointer hover:scale-105 transition-transform">
        <div className="w-48 h-[288px] rounded-lg bg-zinc-800 relative">
          <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
            <div className="animate-pulse w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%] animate-[shimmer_.5s_infinite]"></div>
          </div>
        </div>
      </div>

      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default SimilarMovieList;
