import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../../Services/server-service';
import RestaurantOption from '../restaurant-option/restaurant-option';
import Loading from '../loading/loading';
import './restaurant-page.css';

import { RestaurantType } from '../../allTypes';

const RestaurantPage = () => {
	const [restaurantList, setRestaurantList] = useState<RestaurantType[]>([]);
	useEffect(() => {
		getRestaurants().then((res)=> console.log(res))
		getRestaurants().then((result) => {
			setRestaurantList(result);
		});
	}, []);

	return !restaurantList[0] ? (
		<Loading />
	) : (
		<div className='restaurant-page'>
			{restaurantList.map((restaurant) =>
				<RestaurantOption key={restaurant.place_id} {...restaurant}></RestaurantOption>
			)}
		</div>
	);
};

export default RestaurantPage;
