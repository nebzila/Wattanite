import { MovieType, RestaurantType} from '../models/types'
import { Request, Response } from 'express';
import path from 'path';

import * as dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname+'../../../../.env')});

const restaurantKey: (string | undefined) = process.env.REACT_APP_GOOGLE_API_KEY;
const restaurantURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=takeaway&location=london&radius=500&region=UK&key=${restaurantKey}`;

const photoURL = (ref:string): string =>
  `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${restaurantKey}`;

export const getRestaurants = async (req: Request, res: Response) => {
  try {
    console.log('getRestaurants running')
    const restaurantsData =  await fetch(restaurantURL)
    const restaurants = await restaurantsData.json()
    restaurants.results.forEach((restaurant: RestaurantType) => {
      restaurant.photos.forEach(
        (photo) => (photo.imgsrc = photoURL(photo.photo_reference))
      );
    });
    res.send(restaurants)
    res.status(200)

  } catch (error) {
    console.error('ERROR @geRestaurants:', error);
    res.status(400);
  }
}