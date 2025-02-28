const EmptyList = () => {
  return (
    <div class="hidden text-center py-16">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-24 w-24 mx-auto text-moviedb-gray mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        />
      </svg>
      <h2 class="text-2xl font-bold text-light mb-2">
        Your Watch Later list is empty
      </h2>
      <p class="text-light/70 mb-6">
        Explore movies and add them to your list to watch later
      </p>
      <a
        href="#"
        class="bg-primary text-dark px-6 py-2 rounded-full hover:bg-primary/80 transition"
      >
        Explore Movies
      </a>
    </div>
  );
};

export default EmptyList;
