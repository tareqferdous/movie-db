import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ movie }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <Link href={`/movie/${movie?.id}`}>
        <Image
          src={`${IMAGE_BASE_URL}${movie?.poster_path}`}
          alt={movie?.original_title}
          width={500}
          height={500}
          className="w-full rounded-lg"
        />
        <div className="mt-2">
          <h3 className="text-light text-sm font-bold truncate">
            {movie?.original_title}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
