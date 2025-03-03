"use client";
import { formatDateToFullString, toMillion } from "@/utils";
import Image from "next/image";

const MovieComparisonContainer = ({
  movie,
  removeMovieSlot,
  index,
  genres,
}) => {
  console.log(movie);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => removeMovieSlot(index)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-2 h-full">
          <Image
            src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
            alt={movie?.title}
            width={500}
            height={500}
            className="w-full rounded-lg mb-4 object-contain max-h-full"
          />
          <h2 className="text-xl font-bold mb-2 text-center">{movie?.title}</h2>
        </div>
        <div className="w-full space-y-4 col-span-3">
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Rating:</span>
            <span className="float-right">
              {movie?.vote_average.toFixed(1)}/10{" "}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Release Year:</span>
            <span className="float-right">
              {formatDateToFullString(movie?.release_date)}
            </span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Runtime:</span>
            <span className="float-right">{movie?.runtime} min</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Budget:</span>
            <span className="float-right">$ {toMillion(movie?.budget)}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Revenue:</span>
            <span className="float-right">$ {toMillion(movie?.revenue)}</span>
          </div>
          <div className="bg-zinc-800 p-3 rounded">
            <span className="text-gray-400">Genres:</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {movie?.genres.length > 0 &&
                movie?.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-zinc-700 px-2 py-1 rounded-full text-sm"
                  >
                    {genre?.name}{" "}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieComparisonContainer;
