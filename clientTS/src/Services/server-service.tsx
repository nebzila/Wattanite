let baseURL = 'http://localhost:3001';

export const getMovies = async () => {
  try {
    const response = await fetch(baseURL + '/movie-service');
    const movieData = await response.json();
    return movieData.results;
  } catch (error) {
    console.log('getMovies Service', error);
  }
};

export const getRestaurants = async () => {
  try {
    const response = await fetch(baseURL + '/restaurant-service');
    const restaurantData = await response.json();
    return restaurantData.results;
  } catch (error) {
    console.log('getRestaurants Service', error);
  }
};

export const getWinners = async () => {
  try {
    console.log('getting winners SERVICE');
    const response = await fetch(baseURL + '/data');
    console.log('THE RESPONSE IS', response);
    const winnerData = await response.json();
    return winnerData;
  } catch (error) {
    console.log('getWinners Service', error);
  }
};

export const sendVote = async (vote) => {
  try {
    console.log(vote);
    const data = await fetch(baseURL + '/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vote),
    });
    const parsed = await data.json();
    return parsed;
  } catch (error) {
    console.log('sendVote Service', error);
  }
};
