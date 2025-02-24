const MovieSelection = () => {
  return (
    <div class="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      <div class="flex justify-end mb-4">
        <button class="text-gray-400 hover:text-white">✕</button>
      </div>
      <div class="flex-grow flex flex-col items-center justify-center">
        <a
          href="./search.html"
          class="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
        >
          Select Movie
        </a>
      </div>
    </div>
  );
};

export default MovieSelection;
