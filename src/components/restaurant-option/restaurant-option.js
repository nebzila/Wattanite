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
			<div className='restaurant-left'>
				<img className='restaurant-poster' src={props.value.icon} />
			</div>
			<div className='restaurant-right'>
				<div className='restaurant-text'>
					<h1 className='restaurant-title'>{props.value.name}</h1>
					<h3>{props.value.voteCount}</h3>
					<p className='restaurant-blurb'>{props.value.overview}</p>
				</div>
				<button
					className='restaurant-vote-button'
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
export default RestaurantOption;
