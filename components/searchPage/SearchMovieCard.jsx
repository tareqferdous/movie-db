const SearchMovieCard = () => {
  return (
    <a
      href="details.html"
      class="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <img
        src="https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
        alt="Avatar: The Way of Water"
        class="w-full aspect-[2/3] object-cover"
      />
      <div class="p-4">
        <h3 class="font-bold mb-2">Avatar: The Way of Water</h3>
        <div class="flex justify-between text-sm text-gray-400">
          <span>2022</span>
          <span>⭐ 7.7</span>
        </div>
      </div>
    </a>
  );
};

export default SearchMovieCard;
