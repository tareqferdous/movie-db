"use client";
import { deleteMovie, getWatchListMovies } from "@/app/action";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import EmptyList from "./EmptyList";
import WatchListCard from "./WatchListCard";

const WatchLists = () => {
  const { user } = useAuth();
  const [watchList, setWatchList] = useState(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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

  console.log(watchList);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {watchList && watchList.length > 0 ? (
        watchList.map((movie) => (
          <WatchListCard
            key={movie?._id}
            movie={movie}
            handleDeleteMovie={handleDeleteMovie}
          />
        ))
      ) : (
        <>
          <EmptyList />
        </>
      )}
    </div>
  );
};

export default WatchLists;
