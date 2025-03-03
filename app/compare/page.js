"use client";
import MovieHeader from "@/components/compare/MovieHeader";
import MovieSearchModal from "@/components/compare/MovieSearchModal";
import MovieSelection from "@/components/compare/MovieSelection";
import { useState } from "react";

const MovieComparePage = () => {
  const [movieSlots, setMovieSlots] = useState([]);
  const [showMovieSearchModal, setShowMovieSearchModal] = useState(false);
  const [activeSlot, setActiveSlot] = useState(null);

  const addMovie = () => {
    setMovieSlots([...movieSlots, { movie: null }]);
  };

  const removeMovieSlot = (id) => {
    setMovieSlots(movieSlots.filter((_, i) => i !== id));
  };

  const handleOpenSearchModal = (id) => {
    setActiveSlot(id);
    setShowMovieSearchModal(!showMovieSearchModal);
  };

  const handleSelectMovie = (movie) => {
    console.log(movie);
    const updatedSlots = [...movieSlots];
    updatedSlots[activeSlot].movie = movie;
    setMovieSlots(updatedSlots);
    setShowMovieSearchModal(false);
  };

  console.log("movieSlots", movieSlots);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Main Content  */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        <MovieHeader addMovie={addMovie} />

        {/* Movie Comparison Container  */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* <MovieComparisonContainer selectedMovie={selectedMovie} /> */}

          <>
            {" "}
            {movieSlots.length > 0 &&
              movieSlots.map((slot, index) => (
                <MovieSelection
                  key={slot}
                  slot={index}
                  removeMovieSlot={removeMovieSlot}
                  handleSearchModal={handleOpenSearchModal}
                />
              ))}
          </>
        </div>
      </main>

      {/* Movie Search Modal  */}
      {showMovieSearchModal && (
        <MovieSearchModal
          handleSearchModal={handleOpenSearchModal}
          setShowMovieSearchModal={setShowMovieSearchModal}
          handleSelectMovie={handleSelectMovie}
        />
      )}
    </div>
  );
};

export default MovieComparePage;
