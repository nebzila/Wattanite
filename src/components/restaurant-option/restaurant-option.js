import React, { useContext, useEffect } from 'react';
import { mainContext } from '../main-box/main-box';
import './restaurant-option.css';

const RestaurantOption = (props) => {
	const { setPage, setFormData, formData } = useContext(mainContext);

	function submitHandler(event, restaurantData) {
		event.preventDefault();
		setFormData({ ...formData, restaurant: restaurantData });
	}

	useEffect(() => {
		if (formData.movie.id && formData.restaurant.place_id) setPage('winner');
		console.log('form', formData);
	}, [formData]);

	return (
		<div className='restaurant-option'>
			<div className='content'>
				<img className='poster' src={props.value.icon} />
				<div className='text'>
					<h1 className='title'>{props.value.name}</h1>
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
export default RestaurantOption;
