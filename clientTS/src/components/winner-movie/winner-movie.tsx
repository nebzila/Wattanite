import React from 'react';
import './winner-movie.css';
import { MovieType } from '../../allTypes';

const WinnerMovie = (movie: MovieType) => {
	return (
		<div className='winner-movie-option'>
			<div className='winner-movie-left'>
				<img
					className='winner-movie-poster'
					src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
				/>
			</div>
			<div className='winner-movie-right'>
				<div className='winner-movie-text'>
					<h1 className='winner-movie-title'>{movie.title}</h1>
				</div>
			</div>
		</div>
	);
};
export default WinnerMovie;
