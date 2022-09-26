import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../../Services/restaurant-service';
import RestaurantOption from '../restaurant-option/restaurant-option';
import './restaurant-page.css';

const RestaurantPage = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	useEffect(() => {
		getRestaurants().then((result) => {
			setRestaurantList(result);
		});
	}, []);
	console.log(restaurantList);
	return restaurantList === [] ? (
		<h1>Loading</h1>
	) : (
		<div className='restaurant-page'>
			<h1>RESTO</h1>
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
