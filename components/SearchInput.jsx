"use client";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query") || "";
  const [query, setQuery] = useState(initialQuery);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (query.trim()) {
      router.push(`/search-result?query=${encodeURIComponent(query)}`);
    }
  }, [query]);

  console.log(query);

  return (
    <div class="flex items-center space-x-4">
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
      {user?.email ? (
        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      ) : (
        <Link
          href={"/login"}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default SearchInput;
