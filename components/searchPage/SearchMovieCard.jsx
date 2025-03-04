import Image from "next/image";
import Link from "next/link";

const SearchMovieCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <Link
      href={`/movie/${movie?.id}`}
      className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
    >
      <Image
        src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
        alt={movie?.title}
        width={400}
        height={400}
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold mb-2">{movie?.title}</h3>
        <div className="flex justify-between text-sm text-gray-400">
          <span>2022</span>
          <span>⭐ {movie?.vote_average}</span>
        </div>
      </div>
    </Link>
  );
};

export default SearchMovieCard;
