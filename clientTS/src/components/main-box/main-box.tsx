import React, { useState, createContext, Dispatch, SetStateAction } from 'react';
import './main-box.css';
import StartScreen from '../start-screen/start-screen';
import MoviePage from '../movie-page/movie-page';
import RestaurantPage from '../restaurant-page/restaurant-page';
import WinnerPage from '../winner-page/winner-page';
// import { MovieType, RestaurantType } from '../../allTypes';
import { MovieType, RestaurantType } from '../../../../serverTS/src/models/types';
import { VoteType } from '../../allTypes';

interface IContext {
	page: string;
	setPage: Dispatch<SetStateAction<string>>;
	formData: VoteType;
	setFormData: Dispatch<SetStateAction<VoteType>>;
}

export const mainContext = createContext<IContext>({
	page: '',
	setPage: ()=>null,
	formData: { name: '', postcode: '', movie: { adult: true,
		backdrop_path: '',
		id: null,
		title: '',
		original_language: '',
		original_title: '',
		overview: '',
		poster_path: '',
		media_type: '',
		genre_ids: [],
		popularity: 0,
		release_date: '',
		video: false,
		vote_average: 0,
		vote_count: 0
	},
	restaurant: {
		business_status: '',
		formatted_address: '',
		geometry: {
					 location: { lat: 0, lng: 0 },
					 viewport: {
					   northeast: { lat: 0, lng: 0 },
					   southwest: { lat: 0, lng: 0 },
					},
				 },
		icon: '',
		icon_background_color: '',
		icon_mask_base_uri: '',
		name: '',
		opening_hours: { open_now: true },
		photos: [{
				   height: 0,
				   html_attributions: [''],
				   imgsrc: '',
				   photo_reference: '',
				   width: 0
				 }],
		place_id: '',
		plus_code: {
		  compound_code: '',
		  global_code: '',
		},
		price_level: 0,
		rating: '',
		reference: '',
		types: [''],
		user_ratings_total: 0
	}
    },
	setFormData: ()=>null
	});

const MainBox = () => {

	const [page, setPage] = useState('name');
	const [formData, setFormData] = useState({
		name: '',
		postcode: '',
		movie: {} as MovieType,
		restaurant: {} as RestaurantType,
	});

	return (
		<mainContext.Provider value={{ page, setPage, formData, setFormData }}>
			<div className='main-box'>
				<h1 className='wattanite'>Wattanite!</h1>
				{
					{
						name: <StartScreen />,
						movies: <MoviePage />,
						restaurant: <RestaurantPage />,
						winner: <WinnerPage />,
					}[page]
				}
			</div>
		</mainContext.Provider>
	);
};

export default MainBox;
