import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import Loading from '../loading/loading';
import './winner-page.css';

const WinnerPage = () => {
	const CTX = useContext(mainContext);
	const [canShow, setCanShow] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setCanShow(true), 4000);
		return () => clearTimeout(timer);
	});
	return canShow ? (
		<div className='winner-page'>
			<h1>Winners!</h1>
			<h1>Sam & Simon</h1>
			<div className='winners'>
				<WinnerMovie
					className='movie-winner'
					value={CTX.formData.movie}
				></WinnerMovie>
				<WinnerRestaurant
					className='restaurant-winner'
					value={CTX.formData.restaurant}
				/>
			</div>
		</div>
	) : (
		<>
			<h1 className='loader'>Collecting results...</h1>
			<Loading></Loading>
		</>
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
