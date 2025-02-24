import CastList from "@/components/details/CastList";
import MovieGenres from "@/components/details/MovieGenres";
import SimilarMovieList from "@/components/details/SimilarMovieList";
import SocialButtons from "@/components/details/SocialButtons";
import WatchListButtons from "@/components/details/WatchListButtons";

const MovieDetailsPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Movie Details Section */}
      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://image.tmdb.org/t/p/original/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg"
              alt="Smile 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
          </div>

          <div className="relative container mx-auto px-4 pt-32">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src="https://image.tmdb.org/t/p/original/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg"
                  alt="Smile 2"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-4">Smile 2</h1>

                <div className="flex items-center mb-4 space-x-4">
                  <span className="text-green-500"> 24 November 2024 </span>
                  <span>| </span>
                  <span>127 min</span>
                </div>

                <p className="text-lg mb-6">
                  About to embark on a new world tour, global pop sensation Skye
                  Riley begins experiencing increasingly terrifying and
                  inexplicable events. Overwhelmed by the escalating horrors and
                  the pressures of fame, Skye is forced to face her dark past to
                  regain control of her life before it spirals out of control.
                </p>

                <MovieGenres />

                <CastList />

                <WatchListButtons />

                <SocialButtons />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Movies Section  */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <SimilarMovieList />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
