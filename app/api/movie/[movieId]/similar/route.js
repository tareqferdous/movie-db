export async function GET(request, { params }) {
  const movieId = params.movieId;
  try {
    const similarMovies = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.TMDB_API_KEY}`
    );

    if (!similarMovies.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to get movie credits" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const similarData = await similarMovies.json();

    return new Response(JSON.stringify(similarData), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "An error occurred while fetching data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
