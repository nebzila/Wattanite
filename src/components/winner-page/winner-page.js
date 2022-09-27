import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import './winner-page.css';

const WinnerPage = () => {
	const [winnerList, setWinnerList] = useState([]);
	const CTX = useContext(mainContext);
	console.log('ctx winner option', CTX);

	useEffect(() => {
		setWinnerList(CTX.formData);
	}, []);

	return winnerList === [] ? (
		<h1>Loading</h1>
	) : (
		<div className='winner-page'>
			<WinnerMovie
				className='movie-winner'
				value={CTX.formData.movie}
			></WinnerMovie>
			<WinnerRestaurant
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
