const router = require('express').Router();
const serviceController = require('./controllers/service-controllers');

router.get('/movie-service', serviceController.getMovies);
router.get('/restaurant-service', serviceController.getRestaurants);

// router.post('/data', voteController.saveData);
// router.get('/data', voteController.getData);

module.exports = router;
