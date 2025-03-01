"use client";
import { deleteMovie, getWatchListMovies } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

const WatchListCard = ({ userId }) => {
  const { auth } = useAuth();
  const [watchList, setWatchList] = useState(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (auth?.email) {
      const fetchWatchList = async () => {
        const res = await getWatchListMovies(auth?.email);
        if (res.length > 0) {
          setWatchList(res);
        }
      };
      fetchWatchList();
    }
  }, []);

  const handleDeleteMovie = async (id) => {
    try {
      const result = await deleteMovie(id);
      if (result.success) {
        startTransition(() => {
          setWatchList((prevItems) =>
            prevItems.filter((item) => item._id !== id)
          );
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {watchList &&
        watchList.length > 0 &&
        watchList.map((movie) => (
          <div
            key={movie}
            className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative"
          >
            <Image
              src={`${IMAGE_BASE_URL}${movie?.poster}`}
              alt="Armor"
              width={500}
              height={500}
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h2 className="text-xl font-bold text-light mb-2">
                {movie?.title}
              </h2>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleDeleteMovie(movie?._id)}
                  className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default WatchListCard;
