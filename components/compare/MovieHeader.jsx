"use client";
const MovieHeader = ({ addMovie }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Compare Movies</h1>
      <button
        onClick={addMovie}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
      >
        Add Movie +
      </button>
    </div>
  );
};

export default MovieHeader;
