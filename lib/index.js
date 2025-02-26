import wait from "@/utils";

export const fetchTrendingMovies = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/trending`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/popular`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log("fetch error", error.message);
    return null;
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/top-rated`);
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
      `http://localhost:3000/api/movie/${movieId}/details`,
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
      `http://localhost:3000/api/movie/${movieId}/credit`,
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
      `http://localhost:3000/api/movie/${movieId}/similar`,
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
