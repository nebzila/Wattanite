const router = require('express').Router();

router.get('/movie-service', serviceController.getMovies);
router.get('/restaurant-service', serviceController.getRestaurants);

router.post('/data', voteController.saveData);
