"use client";
import { getWatchListMovies } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import Image from "next/image";
import { useEffect, useState } from "react";

const WatchListCard = ({ userId }) => {
  const { auth } = useAuth();
  const [watchList, setWatchList] = useState(null);

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {watchList &&
        watchList.length > 0 &&
        watchList.map((movie) => (
          <div
            key={movie}
            class="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative"
          >
            <Image
              src="https://image.tmdb.org/t/p/original/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg"
              alt="Armor"
              width={500}
              height={500}
              class="w-full h-[450px] object-cover"
            />
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h2 class="text-xl font-bold text-light mb-2">Armor</h2>
              <div class="flex justify-between items-center">
                <span class="text-primary">2010</span>
                <button class="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition">
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
