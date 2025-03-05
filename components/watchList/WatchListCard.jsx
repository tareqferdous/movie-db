import Image from "next/image";

const WatchListCard = ({ handleDeleteMovie, movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="bg-moviedb-black rounded-lg overflow-hidden shadow-lg group relative">
      <Image
        src={`${IMAGE_BASE_URL}${movie?.poster}`}
        alt="Armor"
        width={500}
        height={500}
        priority
        className="w-full h-[450px] object-cover"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h2 className="text-xl font-bold text-light mb-2">{movie?.title}</h2>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleDeleteMovie(movie?._id)}
            className="bg-moviedb-red text-light px-3 py-1 rounded-full hover:bg-moviedb-red/80 transition"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchListCard;
