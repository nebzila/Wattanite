import React, { useState, useEffect, useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import WinnerMovie from '../winner-movie/winner-movie';
import WinnerRestaurant from '../winner-restaurant/winner-restaurant';
import Loading from '../loading/loading';
import { getWinners } from '../../Services/server-service';
import './winner-page.css';

const WinnerPage = () => {
	const CTX = useContext(mainContext);
	const [winnerList, setWinnerList] = useState([]);

	useEffect(() => {
		getWinners().then((result) => {
			setWinnerList(result.slice(0, 2));
		});
	}, []);
	// i dont think i'll need to slice anymore
	return !winnerList[0] ? (
		<>
			<h1 className='loader'>Collecting results...</h1>
			<Loading></Loading>
		</>
	) : (
		<div className='winner-page'>
			<h1>Winners!</h1>
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
	);
};

export default WinnerPage;
