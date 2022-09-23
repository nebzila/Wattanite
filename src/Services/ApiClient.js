//don't forget to hide your api key

const movieURL =
	'https://api.themoviedb.org/3/trending/movie/week?api_key=940dc4b555fdabad1a38b6f129d9b8f4';
export const getMovies = async () => {
	const movies = await (await fetch(movieURL)).json();
	return movies.results;
};
