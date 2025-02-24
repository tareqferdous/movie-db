import HeroSection from "@/components/Home/HeroSection";
import PopularMovies from "@/components/Home/PopularMovies";
import TopRatedMovies from "@/components/Home/TopRatedMovies";
import TrendingMovies from "@/components/Home/TrendingMovies";

const fetchMovies = async () => {
  const res = await fetch(`http://localhost:3000/api/movies`);

  if (!res.ok) throw new Error("Failed to fetch movies");

  return res.json();
};

export default async function HomePage() {
  const data = await fetchMovies();
  console.log(data.results.length);
  return (
    <div className="bg-black text-white">
      {/* Hero Section  */}
      <HeroSection />

      {/* Movie Sections  */}
      <div className="container mx-auto px-4 py-8">
        {/* Trending Movies  */}
        <TrendingMovies />

        {/* Popular Movies  */}
        <PopularMovies />

        {/* Top Rated Movies  */}
        <TopRatedMovies />
      </div>
    </div>
  );
}
