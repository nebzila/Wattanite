import { VoteType } from '../allTypes';

let baseURL = 'http://localhost:3001';

export const getMovies = async () => {
  try {
    const response = await fetch(baseURL + '/movie-service');
    const movieData = await response.json();
    return movieData.results;
  } catch (error) {
    console.log('ERROR: getMovies Service', error);
  }
};

export const getRestaurants = async () => {
  try {
    const response = await fetch(baseURL + '/restaurant-service');
    const restaurantData = await response.json();
    return restaurantData.results;
  } catch (error) {
    console.log('ERROR: getRestaurants Service', error);
  }
};

export const getWinners = async () => {
  try {
    const response = await fetch(baseURL + '/data');
    const winnerData = await response.json();
    return winnerData;
  } catch (error) {
    console.log('ERROR: getWinners Service', error);
  }
};

// name: ; postcode: ; movie: ; restaurant: ; 

export const sendVote = async (vote: VoteType) => {
  try {
    console.log('Vote: ', vote);
    const data = await fetch(baseURL + '/data', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vote),
    });
    const parsed = await data.json();
    return parsed;
  } catch (error) {
    console.log('ERROR: sendVote Service', error);
  }
};
