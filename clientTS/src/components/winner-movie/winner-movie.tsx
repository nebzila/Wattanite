import React from 'react';
import './winner-movie.css';

const WinnerMovie = (props) => {
	return (
		<div className='winner-movie-option'>
			<div className='winner-movie-left'>
				<img
					className='winner-movie-poster'
					src={'https://image.tmdb.org/t/p/w300/' + props.value.poster_path}
				/>
			</div>
			<div className='winner-movie-right'>
				<div className='winner-movie-text'>
					<h1 className='winner-movie-title'>{props.value.title}</h1>
				</div>
			</div>
		</div>
	);
};
export default WinnerMovie;
