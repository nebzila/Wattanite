"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurantController_1 = require("../controllers/restaurantController");
const movieController_1 = require("../controllers/movieController");
const router = express_1.default.Router();
router.get('/movies', movieController_1.getMovies);
router.get('/restaurants', restaurantController_1.getRestaurants);
exports.default = router;
