const MovieTrailer = ({ trailer }) => {
  return (
    <div>
      {trailer && (
        <div className="mt-4">
          <h2 className="text-2xl">Trailer</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer}`}
            allowFullScreen
            className="rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;
