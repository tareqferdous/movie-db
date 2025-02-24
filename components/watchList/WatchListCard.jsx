const WatchListCard = () => {
  return (
    <div class="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
      <img
        src="https://image.tmdb.org/t/p/original/pnXLFioDeftqjlCVlRmXvIdMsdP.jpg"
        alt="Armor"
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
  );
};

export default WatchListCard;
