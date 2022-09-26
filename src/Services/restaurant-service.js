const restaurantKey = process.env.REACT_APP_MOVIE_API_KEY;

const restaurantURL = `https://maps.googleapis.com/maps/api/js?key=${restaurantKey}&libraries=places&callback=initMap`;

export const getRestaurants = async () => {
	// after

	try {
		const response = await fetch(restaurantURL);
		const restaurants = await response.json();
		const output = restaurants.results.map((restaurant) => {
			return { ...restaurant, voteCount: 0 };
		});
		return output;
	} catch (error) {
		console.error(error);
		return [];
	}

	// before
	// const restaurants = await (await fetch(restaurantURL)).json();
	// const outPut = restaurants.results.map((restaurant) => {
	// 	return { ...restaurant, voteCount: 0 };
	// });
	// return outPut;
};
