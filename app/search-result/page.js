"use client";
import SearchMovieCard from "@/components/searchPage/SearchMovieCard";
import { fetchSearchMovies } from "@/lib";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchResultPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!query) {
      setSearchResults([]);
    } else {
      const fetchWatchList = async () => {
        const res = await fetchSearchMovies(query);
        setSearchResults(res || []);
      };
      fetchWatchList();
    }
  }, [query]);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Content  */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        {/* Search Stats  */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Search Results for - {query}</h1>
          <p className="text-gray-400">Found {searchResults.length} results</p>
        </div>

        {/* Filters and Sort Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults.length > 0 &&
            searchResults.map((movie) => (
              <SearchMovieCard key={movie?.id} movie={movie} />
            ))}
          {/* Movie Card 1  */}
        </div>
      </main>
    </div>
  );
};

export default SearchResultPage;
