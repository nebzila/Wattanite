import React, { useState, createContext } from 'react';
import './main-box.css';
import StartScreen from '../start-screen/start-screen';
import MoviePage from '../movie-page/movie-page';
import RestaurantPage from '../restaurant-page/restaurant-page';
import WinnerPage from '../winner-page/winner-page';
import { MovieType, RestaurantType } from '../../allTypes';

interface IContext {
	// page, setPage,  formData, setFormData  -- movie-option, restaurant-option, start-screen
	page: string;
	setPage: Dispatch<SetStateAction<string>>;
	formData: { name: string; postcode: string; movie: MovieType; restaurant: RestaurantType };
	setFormData: Dispatch<SetStateAction<{ name: string; postcode: string; movie: MovieType; restaurant: RestaurantType }>>;
  }

export const mainContext = createContext<IContext | null>(null);

const MainBox = () => {

	const [page, setPage] = useState('name');
	const [formData, setFormData] = useState({
		name: '',
		postcode: '',
		movie: {},
		restaurant: {},
	});

	return (
		<mainContext.Provider value={{ page, setPage, setFormData, formData }}>
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
