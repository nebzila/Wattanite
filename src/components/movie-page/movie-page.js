import React, { useState, useEffect } from 'react';
import './movie-page.css';
import { getMovies } from '../../Services/server-service';
import MovieOption from '../movie-option/movie-option';

const MoviePage = () => {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		getMovies().then((result) => {
			setMovieList(result.slice(0, 6));
		});
	}, []);

	return movieList === [] ? (
		<h1>Loading</h1>
	) : (
		<div className='movie-page'>
			{movieList.map((movie) => (
				<MovieOption key={movie.id} value={movie}></MovieOption>
			))}
		</div>
	);
};
export default MoviePage;
