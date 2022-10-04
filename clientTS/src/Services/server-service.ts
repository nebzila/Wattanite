import { VoteType } from '../allTypes';

let baseURL = 'http://localhost:3002';

export const getMovies = async () => {
  try {
    const response = await fetch(baseURL + '/api/movies');
    const movieData = await response.json();
    return movieData.results;
  } catch (error) {
    console.log('ERROR: getMovies Service', error);
  }
};

export const getRestaurants = async () => {
  try {
    const response = await fetch(baseURL + '/api/restaurants');
    const restaurantData = await response.json();
    return restaurantData.results;
  } catch (error) {
    console.log('ERROR: getRestaurants Service', error);
  }
};

export const getWinners = async (name: string) => {
  try {
    console.log('getWinners in client is running');
    const res = await fetch(baseURL + `/vote/get/${name}`);
    console.log('res from fetch', res)
    const winner = await res.json()
    console.log('res after json', winner)
    return winner
  } catch (error) {
    console.log('ERROR: getWinners Service', error);
  }
};

export const sendVote = async (vote: VoteType) => {
  try {
    const data = await fetch(baseURL + '/vote/create', {
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
