import React, { useState, createContext } from 'react';
import './main-box.css';
import StartScreen from '../start-screen/start-screen';
import MoviePage from '../movie-page/movie-page';
export const mainContext = createContext();

const MainBox = () => {
	// how do you set object
	const [page, setPage] = useState('name');
	const [formData, setFormData] = useState({
		name: String,
		postcode: String,
		movie: Object,
		restaurant: {},
	});
	console.log(page);

	return (
		<mainContext.Provider value={{ setPage, setFormData, formData }}>
			<div className='main-box'>
				{
					{
						name: <StartScreen />,
						movies: <MoviePage />,
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
