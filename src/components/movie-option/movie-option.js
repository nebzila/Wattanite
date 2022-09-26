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
			<div className='content'>
				<img
					className='poster'
					src={'https://image.tmdb.org/t/p/w300/' + props.value.poster_path}
				/>
				<div className='text'>
					<h1 className='title'>{props.value.title}</h1>
					<h3>{props.value.voteCount}</h3>
					<p className='blurb'>{props.value.overview}</p>
				</div>
			</div>
			<button
				className='vote-button'
				onClick={(event) => {
					submitHandler(event, props.value);
				}}
			>
				+ 1
			</button>
		</div>
	);
};
export default MovieOption;
