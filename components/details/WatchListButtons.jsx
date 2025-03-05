"use client";
import { addMovieToWatchList, getWatchListMovies } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const WatchListButtons = ({ movie, movieId }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [watchList, setWatchList] = useState(null);
  const [message, setMessage] = useState("");

  const handleWatchLater = async () => {
    if (!user?.email) {
      router.push(`/login`);
    } else {
      const movieInfo = {
        userId: user?.email,
        movieId: movie?.id,
        title: movie?.title,
        poster: movie?.poster_path,
      };
      const response = await addMovieToWatchList(movieInfo);
      setMessage(response.status);
    }
  };

  useEffect(() => {
    if (user?.email) {
      const fetchWatchList = async () => {
        const res = await getWatchListMovies(user?.email);
        if (res.length > 0) {
          setWatchList(res);
        }
      };
      fetchWatchList();
    }
  }, [user?.email]);

  const watchListedMovie =
    watchList &&
    watchList.length > 0 &&
    watchList.find((movie) => movie.movieId === movieId);

  const isAdded = message === "ok" || watchListedMovie;

  const isNotAdded = message !== "ok" && !watchListedMovie;

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4">
        <div className="text-center">
          {isNotAdded && (
            <button
              onClick={handleWatchLater}
              className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-file-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M12 11l0 6" />
                <path d="M9 14l6 0" />
              </svg>
              Add to Wacth List
            </button>
          )}
        </div>

        <div className="text-center">
          {isAdded && (
            <button className="flex items-center gap-2 bg-black/40 px-4 py-2 rounded-lg text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-checks"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 12l5 5l10 -10" />
                <path d="M2 12l5 5m5 -5l5 -5" />
              </svg>
              Added to Wacth List
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchListButtons;
