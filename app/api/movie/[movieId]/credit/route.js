export async function GET(request, { params }) {
  const movieId = params.movieId;
  try {
    const creditResponse = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.TMDB_API_KEY}`
    );

    if (!creditResponse.ok) {
      return new Response(
        JSON.stringify({ error: "Failed to get movie credits" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const creditData = await creditResponse.json();

    return new Response(JSON.stringify(creditData), {
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
