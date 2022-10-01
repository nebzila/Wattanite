import React, { useContext } from 'react';
import './movie-option.css';
import { mainContext } from '../main-box/main-box';

import { MovieType } from '../../allTypes';

const MovieOption = ( props: MovieType ) => {
	
	const { setPage, setFormData, formData } = useContext(mainContext);

	// function submitHandler(event, movieData) {
	// 	event.preventDefault();
	// 	setFormData({ ...formData, movie: movieData });
	// 	setPage('restaurant');
	// }

	return (
		<div className='movie-option'>
			<div className='movie-left'>
				<img
					className='movie-poster'
					src={'https://image.tmdb.org/t/p/w300/' + formData.movie.poster_path}
				/>
			</div>
			<div className='movie-right'>
				<div className='movie-text'>
					<h1 className='movie-title'>{formData.movie.title}</h1>
					<h3>{formData.movie.vote_count}</h3>
					<p className='movie-blurb'>{formData.movie.overview}</p>
				</div>

				<button
					className='movie-vote-button'
					// onClick={(event) => {
					// 	submitHandler(event, formData.movie);
					// }}
				>
					+ 1
				</button>
			</div>
		</div>
	);
};
export default MovieOption;
