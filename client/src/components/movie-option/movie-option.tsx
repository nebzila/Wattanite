import React, { useContext, MouseEvent } from 'react';
import './movie-option.css';
import { mainContext } from '../main-box/main-box';

import { MovieType } from '../../allTypes';

const MovieOption = ( movie: MovieType ) => {

	const { setPage, formData, setFormData } = useContext(mainContext);

	function submitHandler(event: MouseEvent<HTMLButtonElement>, movieData: MovieType) {
		event.preventDefault();
		setFormData({ ...formData, movie: movieData });
		setPage('restaurant');
	}

	return (
		<div data-testid="movieOptionDiv" className='movie-option'>
			<div className='movie-left'>
				<img
					className='movie-poster'
					src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
				/>
			</div>
			<div className='movie-right'>
				<div className='movie-text'>
					{/* <h1 className='movie-title'>{props.value.title}</h1> */}
					<h1 className='movie-title'>{movie.title}</h1>
					<h3>{movie.vote_count}</h3>
					<p className='movie-blurb'>{movie.overview}</p>
				</div>

				<button
					className='movie-vote-button'
					onClick={(event) => {
					  submitHandler(event, movie);
					}}
				>
					+ 1
				</button>
			</div>
		</div>
	);
};
export default MovieOption;
