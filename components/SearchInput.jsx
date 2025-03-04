"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (query.trim()) {
      router.push(`/search-result?query=${encodeURIComponent(query)}`);
    } else {
      router.push("/search-result");
    }
  }, [query, router]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
        className="bg-black bg-opacity-50 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:border-white"
      />
      <div
        id="searchResults"
        className="absolute w-full mt-2 bg-black bg-opacity-90 rounded-lg hidden"
      ></div>
    </div>
  );
};

export default SearchInput;
