"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRestaurants = void 0;
const path_1 = __importDefault(require("path"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: path_1.default.resolve(__dirname + '../../../../.env') });
const restaurantKey = process.env.REACT_APP_GOOGLE_API_KEY;
const restaurantURL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=takeaway&location=london&radius=500&region=UK&key=${restaurantKey}`;
const photoURL = (ref) => `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${restaurantKey}`;
const getRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getRestaurants running');
        const restaurantsData = yield fetch(restaurantURL);
        const restaurants = yield restaurantsData.json();
        restaurants.results.forEach((restaurant) => {
            restaurant.photos.forEach((photo) => (photo.imgsrc = photoURL(photo.photo_reference)));
        });
        res.send(restaurants);
        res.status(200);
    }
    catch (error) {
        console.error('ERROR @geRestaurants:', error);
        res.status(400);
    }
});
exports.getRestaurants = getRestaurants;
