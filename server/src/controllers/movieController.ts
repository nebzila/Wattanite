import {MovieType, RestaurantType} from '../models/types'
import { Request, Response } from 'express';
import path from 'path';

import * as dotenv from 'dotenv';
dotenv.config({path: path.resolve(__dirname+'../../../../.env')});
const movieKey: (string | undefined) = process.env.REACT_APP_MOVIE_API_KEY;
const movieURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${movieKey}`

export const getMovies =  async (req: Request, res: Response) => {
  try {
    console.log('getMovies running')
    const movies =  await fetch(movieURL)
    const movieFinal = await movies.json()
    res.send(movieFinal)
    res.status(200)

  } catch (error) {
    console.error('ERROR @getMovies:', error);
    res.status(400);
  }
};