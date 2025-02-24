import EmptyList from "@/components/watchList/EmptyList";
import WatchListCard from "@/components/watchList/WatchListCard";

const WatchListPage = () => {
  return (
    <div class="bg-body text-light min-h-screen">
      <div class="container mx-auto pt-24 pb-8">
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-white">Watch Later</h1>
          <p class="text-light/70 mt-2">
            Movies you've saved to watch in the future
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Movie Card Template  */}
          <WatchListCard />
          <WatchListCard />
          <WatchListCard />
        </div>

        <EmptyList />
      </div>
    </div>
  );
};

export default WatchListPage;
