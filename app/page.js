import HeroSection from "@/components/Home/HeroSection";
import PopularMovies from "@/components/Home/PopularMovies";
import TopRatedMovies from "@/components/Home/TopRatedMovies";
import TrendingMovies from "@/components/Home/TrendingMovies";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "@/lib";

export default async function HomePage() {
  const trendingMovies = await fetchTrendingMovies();
  const popularMovies = await fetchPopularMovies();
  const topRatedMovies = await fetchTopRatedMovies();

  return (
    <div className="bg-black text-white">
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <TrendingMovies trendingMovies={trendingMovies} />

        <PopularMovies popularMovies={popularMovies} />

        <TopRatedMovies topRatedMovies={topRatedMovies} />
      </div>
    </div>
  );
}
