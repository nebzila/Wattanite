import React from 'react';
import './winner-movie.css';
import { MovieType, WinnerType } from '../../allTypes';

interface Iprops  {
	movie: MovieType
}

const WinnerMovie = (props: Iprops) => {
	const {movie} = props
	console.log('MOVIE ', movie)
	return (
		<div className='winner-movie-option'>
			<div className='winner-movie-left'>
				<img
					className='winner-movie-poster'
					src={'https://image.tmdb.org/t/p/w300/' + movie.poster_path}
					alt={movie.title}
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
