let baseURL = 'http://localhost:3001';

export const getMovies = async () => {
	try {
		const response = await fetch(baseURL + '/movie-service');
		const movieData = await response.json();
		return movieData.results;
	} catch (error) {
		console.log(error);
	}
};

export const getRestaurants = async () => {
	try {
		const response = await fetch(baseURL + '/restaurant-service');
		const restaurantData = await response.json();
		return restaurantData.results;
	} catch (error) {
		console.log(error);
	}
};
