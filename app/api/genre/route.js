export async function GET() {
  const TMDB_API_KEY = process.env.TMDB_API_KEY;
  const TMDB_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;

  try {
    const response = await fetch(TMDB_URL);
    if (!response.ok) throw new Error("Failed to fetch genres");
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
