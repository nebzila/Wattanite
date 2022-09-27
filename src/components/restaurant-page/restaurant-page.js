import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../../Services/server-service';
import RestaurantOption from '../restaurant-option/restaurant-option';
import Loading from '../loading/loading';
import './restaurant-page.css';

const RestaurantPage = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	useEffect(() => {
		getRestaurants().then((result) => {
			setRestaurantList(result.slice(0, 6));
		});
	}, []);

	return restaurantList === [] ? (
		<Loading />
	) : (
		<div className='restaurant-page'>
			{restaurantList.map((restaurant) => (
				<RestaurantOption
					key={restaurant.place_id}
					value={restaurant}
				></RestaurantOption>
			))}
		</div>
	);
};

export default RestaurantPage;
