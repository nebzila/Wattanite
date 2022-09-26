const router = require('express').Router();

router.get('/movie-service', serviceController.getMovies);
router.get('/restaurant-service', serviceController.getRestaurants);

router.post('/data', voteController.saveData);
router.get('/data', voteController.getData);

//  SAVE POINT
/* 
* Services
-Transfer your front-end services into your service controller.
-Fix your google-api call and get array of 6 places
-Have your front end wired up to call the back end routes. 
-Have the front end hydrated by results of api calls.

* Data
-Build winner component in the front end. 
-Submit form object with user data and store in the backend
-have winner component make get request for the data
-display data in the winner component
*/
