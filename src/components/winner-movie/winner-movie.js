import React from 'react';
import './winner-movie.css';

const WinnerMovie = (props) => {
	return (
		<div className='movie-option'>
			<div className='movie-left'>
				<img
					className='movie-poster'
					src={'https://image.tmdb.org/t/p/w300/' + props.value.poster_path}
				/>
			</div>
			<div className='movie-right'>
				<div className='movie-text'>
					<h1 className='movie-title'>{props.value.title}</h1>
					<h3>{props.value.voteCount}</h3>
					<p className='movie-blurb'>{props.value.overview}</p>
				</div>
			</div>
		</div>
	);
};
export default WinnerMovie;
