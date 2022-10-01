import React from 'react';
import './winner-restaurant.css';
import { RestaurantType } from '../../allTypes';

const WinnerRestaurant = (restaurant: RestaurantType) => {
	return (
		<div className='winner-restaurant-option'>
			<div className='winner-restaurant-left'>
				<img
					className='winner-restaurant-poster'
					src={restaurant.photos[0].imgsrc}
				/>
			</div>
			<div className='winner-restaurant-right'>
				<div className='winner-restaurant-text'>
					<h1 className='winner-restaurant-title'>{restaurant.name}</h1>
				</div>
			</div>
		</div>
	);
};

export default WinnerRestaurant;
