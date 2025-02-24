const MovieComparisonContainer = () => {
  return (
    <div class="bg-zinc-900 rounded-lg p-4 flex flex-col">
      <div class="flex justify-end mb-4">
        <button
          onclick="removeSlot('slot-1732378356021')"
          class="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div class="grid grid-cols-5 gap-8">
        <div class="col-span-2 h-full">
          <img
            src="https://image.tmdb.org/t/p/original/yfK7zxNL63VWfluFuoUaJj5PdNw.jpg"
            alt="Snowden"
            class="w-full rounded-lg mb-4 object-contain max-h-full"
          />
          <h2 class="text-xl font-bold mb-2 text-center">Snowden</h2>
        </div>
        <div class="w-full space-y-4 col-span-3">
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Rating:</span>
            <span class="float-right">7.1/10</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Release Year:</span>
            <span class="float-right">2016</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Runtime:</span>
            <span class="float-right">134 min</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Budget:</span>
            <span class="float-right">$40.0M</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Revenue:</span>
            <span class="float-right">$37.4M</span>
          </div>
          <div class="bg-zinc-800 p-3 rounded">
            <span class="text-gray-400">Genres:</span>
            <div class="mt-2 flex flex-wrap gap-2">
              <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                Drama{" "}
              </span>
              <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                History{" "}
              </span>
              <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                Crime{" "}
              </span>
              <span class="bg-zinc-700 px-2 py-1 rounded-full text-sm">
                Thriller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieComparisonContainer;
