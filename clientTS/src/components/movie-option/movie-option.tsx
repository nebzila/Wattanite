import React, { useContext } from 'react';
import './movie-option.css';
import { mainContext } from '../main-box/main-box';

const MovieOption = (props) => {
	const { setPage, setFormData, formData } = useContext(mainContext);

	function submitHandler(event, movieData) {
		event.preventDefault();
		setFormData({ ...formData, movie: movieData });
		setPage('restaurant');
	}

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

				<button
					className='movie-vote-button'
					onClick={(event) => {
						submitHandler(event, props.value);
					}}
				>
					+ 1
				</button>
			</div>
		</div>
	);
};
export default MovieOption;