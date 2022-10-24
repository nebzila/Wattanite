import express from 'express';
import { getRestaurants } from '../controllers/restaurantController';
import { getMovies } from '../controllers/movieController';


const router = express.Router();
router.get('/movies', getMovies);
router.get('/restaurants', getRestaurants);

export default router;
