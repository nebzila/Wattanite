import React, { useState, useEffect } from 'react';
import './movie-page.css';
import { getMovies } from '../../Services/server-service';
import MovieOption from '../movie-option/movie-option';
import Loading from '../loading/loading';
const MoviePage = () => {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		getMovies().then((result) => {
			setMovieList(result.slice(0, 6));
		});
	}, []);

	return movieList === [] ? (
		<Loading />
	) : (
		<div className='movie-page'>
			{movieList.map((movie) => (
				<MovieOption key={movie.id} value={movie}></MovieOption>
			))}
		</div>
	);
};
export default MoviePage;
