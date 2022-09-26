import React, { useState, createContext } from 'react';
import './main-box.css';
import StartScreen from '../start-screen/start-screen';
import MoviePage from '../movie-page/movie-page';
import RestaurantPage from '../restaurant-page/restaurant-page';
import WinnerOption from '../winner-option/winner-option';
//import WinnerPage from '../winner-page/winner-page';
export const mainContext = createContext();

const MainBox = () => {
	// how do you set object
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
				{
					{
						name: <StartScreen />,
						movies: <MoviePage />,
						restaurant: <RestaurantPage />,
						winner: <WinnerOption />,
					}[page]
				}
			</div>
		</mainContext.Provider>
	);
};

export default MainBox;

// update your option box vraibles now that they're getting a diferent result from the api

// movie box mapping
{
	/* {movieList.map((movie) => (
// 		<OptionBox
// 			key={movie.id}
// 			movie={movie}
// 			vote={movie.voteCount}
// 		></OptionBox>
// 	))} */
}
