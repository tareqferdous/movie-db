"use client";
import EmptyList from "@/components/watchList/EmptyList";
import WatchListCard from "@/components/watchList/WatchListCard";

const WatchListPage = () => {
  return (
    <div className="bg-body text-light min-h-screen">
      <div className="container mx-auto pt-24 pb-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white">Watch Later</h1>
          <p className="text-light/70 mt-2">
            Movies you have saved to watch in the future
          </p>
        </div>

        {/* Movie Card Template  */}
        <WatchListCard />

        <EmptyList />
      </div>
    </div>
  );
};

export default WatchListPage;
