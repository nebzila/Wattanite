const movieKey = process.env.REACT_APP_MOVIE_API_KEY;

const movieURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieKey}`;
export const getMovies = async () => {
	try {
		const response = await fetch(movieURL);
		const movies = await response.json();
		const outPut = movies.results.map((movie) => {
			return { ...movie, voteCount: 0 };
		});
		return outPut;
	} catch (error) {
		console.error(error);
	}
};
