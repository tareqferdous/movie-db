import SearchMovieCard from "@/components/searchPage/SearchMovieCard";

const SearchResultPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Content  */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Search Stats  */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Search Results for "Avatar"</h1>
          <p className="text-gray-400">Found 48 results</p>
        </div>

        {/* Filters and Sort Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Movie Card 1  */}
          <SearchMovieCard />
          <SearchMovieCard />
          <SearchMovieCard />
        </div>
      </main>
    </div>
  );
};

export default SearchResultPage;
