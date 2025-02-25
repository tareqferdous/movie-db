export async function GET(request, { params }) {
  const movieId = params.movieId;
  try {
    // Fetch movie details
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`
    );

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to get movie details" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const movieInfo = await response.json();

    return new Response(JSON.stringify(movieInfo), {
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
