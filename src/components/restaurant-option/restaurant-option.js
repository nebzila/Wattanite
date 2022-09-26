import React, { useState, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import './restaurant-option.css';

const RestaurantOption = (props) => {
	const { setPage, setFormData, formData } = useContext(mainContext);

	const [restaurant, setRestaurant] = useState({});

	// how do you save the film as an object
	function submitHandler(event) {
		event.preventDefault();
		setFormData({ ...formData, restaurant: restaurant });
		setPage('winner');
		console.log(formData);
		console.log(props.value);
	}

	return (
		<div className='restaurant-option'>
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
					// this setfilm doesn't work properly
					setRestaurant(props.value);
					submitHandler(event);
				}}
			>
				+ 1
			</button>
		</div>
	);
};
export default RestaurantOption;