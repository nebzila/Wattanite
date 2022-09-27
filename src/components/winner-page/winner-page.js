import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import MovieOption from '../movie-option/movie-option';
import RestaurantOption from '../restaurant-option/restaurant-option';
import './winner-page.css';

const WinnerPage = () => {
	const [winnerList, setWinnerList] = useState([]);
	const CTX = useContext(mainContext);
	console.log('ctx winner option', CTX);

	useEffect(() => {
		setWinnerList(CTX.formData);
		console.log(winnerList);
	}, []);

	return winnerList === [] ? (
		<h1>Loading</h1>
	) : (
		<div className='winner-page'>
			<MovieOption
				className='movie-winner'
				value={CTX.formData.movie}
			></MovieOption>
			<RestaurantOption
				className='restaurant-winner'
				value={CTX.formData.restaurant}
			/>
		</div>
	);
};

export default WinnerPage;

/*

old api call code
	useEffect(() => {
		getWinners().then((result) => {
			setWinnerList(result.slice(0, 2));
		});
	}, []);

old map code
  {winnerList.map((winner) => (
				<WinnerOption key={winner.id} value={winner}></WinnerOption>
			))}
*/
