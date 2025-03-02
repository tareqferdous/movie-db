import CastList from "@/components/details/CastList";
import FallbackSkeleton from "@/components/details/FallbackSkeleton";
import MovieGenres from "@/components/details/MovieGenres";
import SimilarMovieList from "@/components/details/SimilarMovieList";
import SocialButtons from "@/components/details/SocialButtons";
import WatchListButtons from "@/components/details/WatchListButtons";
import { fetchMovieCredits, fetchSimilarMovies, fetchSingleMovie } from "@/lib";
import { formatDateToFullString } from "@/utils";
import Image from "next/image";
import { Suspense } from "react";

export const generateMetadata = async ({ params: { movieId } }) => {
  const movie = await fetchSingleMovie(movieId);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return {
    title: movie?.title,
    description: movie?.overview,
    openGraph: {
      images: [`${IMAGE_BASE_URL}${movie?.poster_path}`],
    },
    twitter: {
      card: "summary_large_image",
      title: movie?.title,
      description: movie?.overview,
      images: [`${IMAGE_BASE_URL}${movie?.poster_path}`],
    },
  };
};

const MovieDetailsPage = async ({ params: { movieId } }) => {
  const movieInfo = await fetchSingleMovie(movieId);
  const movieCredits = await fetchMovieCredits(movieId);
  const similarMoviePromise = fetchSimilarMovies(movieId);

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="bg-black text-white">
      {/* Movie Details Section */}
      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src={`${IMAGE_BASE_URL}${movieInfo?.backdrop_path}`}
              alt={movieInfo?.original_title}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
          </div>

          <div className="relative container mx-auto px-4 pt-32">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <Image
                  src={`${IMAGE_BASE_URL}${movieInfo?.poster_path}`}
                  alt={movieInfo?.original_title}
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">
                  {movieInfo?.original_title}
                </h1>

                <div className="flex items-center mb-4 space-x-4">
                  <span className="text-green-500">
                    {" "}
                    {formatDateToFullString(movieInfo?.release_date)}{" "}
                  </span>
                  <span>| </span>
                  <span>{movieInfo?.runtime} min</span>
                </div>

                <p className="text-lg mb-6">{movieInfo?.overview}</p>

                <MovieGenres genres={movieInfo?.genres} />

                <CastList
                  creditData={movieCredits?.cast}
                  IMAGE_BASE_URL={IMAGE_BASE_URL}
                />

                <WatchListButtons movie={movieInfo} movieId={movieId} />

                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Movies Section  */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <Suspense fallback={<FallbackSkeleton />}>
          <SimilarMovieList similarMoviePromise={similarMoviePromise} />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
