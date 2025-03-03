"use client";
import MovieComparisonContainer from "@/components/compare/MovieComparisonContainer";
import MovieHeader from "@/components/compare/MovieHeader";
import MovieSearchModal from "@/components/compare/MovieSearchModal";
import MovieSelection from "@/components/compare/MovieSelection";
import { fetchSingleMovie } from "@/lib";
import { useState } from "react";

const MovieComparePage = () => {
  const [movieSlots, setMovieSlots] = useState([]);
  const [showMovieSearchModal, setShowMovieSearchModal] = useState(false);
  const [activeSlot, setActiveSlot] = useState(null);
  const [genres, setGenres] = useState(null);

  const addMovie = () => {
    setMovieSlots([...movieSlots, null]);
  };

  const removeMovieSlot = (index) => {
    const remaining = movieSlots.filter((_, i) => i !== index);
    setMovieSlots(remaining);
  };

  const handleOpenSearchModal = (index) => {
    setActiveSlot(index);
    setShowMovieSearchModal(!showMovieSearchModal);
  };

  const handleSelectMovie = async (movie) => {
    const movieDetails = await fetchSingleMovie(movie?.id);
    const updatedSlots = [...movieSlots];
    updatedSlots[activeSlot] = movieDetails;
    setMovieSlots(updatedSlots);
    setShowMovieSearchModal(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Content  */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        <MovieHeader addMovie={addMovie} />

        {/* Movie Comparison Container  */}
        <div className="grid gap-6 md:grid-cols-2">
          {movieSlots.map((movie, index) =>
            movie ? (
              <MovieComparisonContainer
                key={index}
                movie={movie}
                removeMovieSlot={removeMovieSlot}
                index={index}
                genres={genres}
              />
            ) : (
              <MovieSelection
                key={index}
                slot={movie}
                removeMovieSlot={removeMovieSlot}
                handleOpenSearchModal={handleOpenSearchModal}
                index={index}
              />
            )
          )}
        </div>
      </main>

      {/* Movie Search Modal  */}
      {showMovieSearchModal && (
        <MovieSearchModal
          setShowMovieSearchModal={setShowMovieSearchModal}
          handleSelectMovie={handleSelectMovie}
        />
      )}
    </div>
  );
};

export default MovieComparePage;
