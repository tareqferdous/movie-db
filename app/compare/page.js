import MovieComparisonContainer from "@/components/compare/MovieComparisonContainer";
import MovieHeader from "@/components/compare/MovieHeader";
import MovieSearchModal from "@/components/compare/MovieSearchModal";
import MovieSelection from "@/components/compare/MovieSelection";

const MovieComparePage = () => {
  return (
    <div class="bg-black text-white min-h-screen">
      {/* Main Content  */}
      <main class="container mx-auto px-4 pt-24 pb-8">
        <MovieHeader />

        {/* Movie Comparison Container  */}
        <div class="grid gap-6 md:grid-cols-2">
          <MovieComparisonContainer />
          <MovieSelection />
        </div>
      </main>

      {/* Movie Search Modal  */}
      <MovieSearchModal />
    </div>
  );
};

export default MovieComparePage;
