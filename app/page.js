import HeroSection from "@/components/Home/HeroSection";
import PopularMovies from "@/components/Home/PopularMovies";
import TopRatedMovies from "@/components/Home/TopRatedMovies";
import TrendingMovies from "@/components/Home/TrendingMovies";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      {/* Navigation */}
      <Navbar />

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
