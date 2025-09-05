import wait from "@/utils";

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/trending`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/popular`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/top-rated`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchSingleMovie = async (movieId) => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/movie/${movieId}/details`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/movie/${movieId}/credit`,
      {
        cache: "no-store",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchSimilarMovies = async (movieId) => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/movie/${movieId}/similar`,
      {
        cache: "no-store",
      }
    );
    await wait(1000);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchSearchMovies = async (searchTerm) => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/search?query=${encodeURIComponent(
        searchTerm
      )}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchMovieGenre = async () => {
  try {
    const response = await fetch(
      `https://movie-db-five-sooty.vercel.app//api/genre`
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};
