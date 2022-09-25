import React, { useState, useContext } from 'react';
import './restaurant-option.css';

const RestaurantPage = () => {
	const [restaurantList, setRestaurantList] = useState([]);
	useEffect(() => {
		getRestaurants().then((result) => {
			setRestaurantList(result.slice(0, 6));
		});
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
