const router = require('express').Router();
const serviceController = require('./controllers/service-controllers');
const voteController = require('./controllers/vote-controllers');

router.get('/movie-service', serviceController.getMovies);
router.get('/restaurant-service', serviceController.getRestaurants);

router.post('/data', voteController.setForm);
router.get('/data', voteController.getForm);

module.exports = router;
