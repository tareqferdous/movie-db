"use client";

import { fetchSearchMovies } from "@/lib";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MovieSearchModal = ({ setShowMovieSearchModal, handleSelectMovie }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    } else {
      const fetchWatchList = async () => {
        const res = await fetchSearchMovies(searchTerm);
        setSearchResults(res);
      };
      fetchWatchList();
    }
  }, [searchTerm]);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button
            onClick={() => setShowMovieSearchModal(false)}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Type movie name..."
          onChange={(e) => setSearchTerm(e.target.value)}
          defaultValue={searchTerm}
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div className="max-h-96 overflow-y-auto">
          {searchResults.length > 0 ? (
            <>
              {searchResults.map((movie) => (
                <div
                  key={movie.id}
                  onClick={() => handleSelectMovie(movie)}
                  className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded"
                >
                  <Image
                    src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
                    alt="The Social Network"
                    width={500}
                    height={500}
                    className="w-16 h-24 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold">{movie?.title}</h3>
                    <p className="text-sm text-gray-400">2010</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSearchModal;
