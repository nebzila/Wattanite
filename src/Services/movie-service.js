const movieKey = process.env.REACT_APP_MOVIE_API_KEY;

const movieURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieKey}`;
export const getMovies = async () => {
	const movies = await (await fetch(movieURL)).json();
	const outPut = movies.results.map((movie) => {
		return { ...movie, voteCount: 0 };
	});
	return outPut;
};
