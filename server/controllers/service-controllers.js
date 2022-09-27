const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const movieKey = process.env.REACT_APP_MOVIE_API_KEY;
const restaurantKey = process.env.REACT_APP_GOOGLE_API_KEY;

const movieURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieKey}`;
const restaurantURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=takeaway&location=london&radius=500&region=UK&key=${restaurantKey}`;
// const photoURL = `	https://maps.googleapis.com/maps/api/place/photo?maxwidth=400
//          &photoreference=${ref}&key=${restaurantKey}`;
const getMovies = async (req, res) => {
	try {
		const response = await fetch(movieURL);
		const movies = await response.json();
		res.send(movies);
		res.status(200);
	} catch (error) {
		console.error(error);
		res.status(400);
	}
};

const getRestaurants = async (req, res) => {
	try {
		const response = await fetch(restaurantURL);
		const restaurants = await response.json();
		res.send(restaurants);
		res.status(200);
	} catch (error) {
		console.error(error);
		res.status(400);
	}
};

module.exports = { getMovies, getRestaurants };

// const refs = [];
// for (const rest of restaurants.results) {
// 	refs.push(
// 		fetch(
// 			`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${rest.photos[0].photo_reference}&key=${restaurantKey}`
// 		)
// 	);
// }
