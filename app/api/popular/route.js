export async function GET(request) {
  try {
    const response = await fetch(`
          https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`);

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "TMDB data not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
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
