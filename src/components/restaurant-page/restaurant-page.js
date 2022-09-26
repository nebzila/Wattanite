import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../../Services/restaurant-service';
import RestaurantOption from '../restaurant-option/restaurant-option';
import './restaurant-page.css';

const RestaurantPage = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	useEffect(() => {
		getRestaurants()
			.then((result) => {
				setRestaurantList(result.slice(0, 6));
			})
			.catch((err) => console.log('getRestaurants()', err));
	}, []);

	return restaurantList === [] ? (
		<h1>Loading</h1>
	) : (
		<div className='restaurant-page'>
			{restaurantList.map((restaurant) => (
				<RestaurantOption
					key={restaurant.id}
					value={restaurant}
				></RestaurantOption>
			))}
		</div>
	);
};

export default RestaurantPage;
