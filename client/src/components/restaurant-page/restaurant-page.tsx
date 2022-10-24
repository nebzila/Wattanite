import React, { useState, useEffect } from 'react';
import { getRestaurants } from '../../Services/server-service';
import RestaurantOption from '../restaurant-option/restaurant-option';
import Loading from '../loading/loading';
import './restaurant-page.css';

import { RestaurantType, Iprops } from '../../allTypes';

const RestaurantPage = (props: Iprops) => {
	const [restaurantList, setRestaurantList] = useState<RestaurantType[]>([]);
	useEffect(() => {
		getRestaurants().then((result) => {
			setRestaurantList(result.slice(0, 6));
		});
	}, []);

	return !restaurantList[0] ? (
		<Loading />
	) : (
		<div data-testid="restaurantPage-div" className='restaurant-page'>
			{restaurantList.map((restaurant) =>
				<RestaurantOption key={restaurant.place_id} restaurant={restaurant} socket={props.socket}></RestaurantOption>
			)}
		</div>
	);
};

export default RestaurantPage;
