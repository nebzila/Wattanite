import React, { useEffect, useState, useContext } from 'react';
import './winner-screen.css';
import { CTX } from '../../App';
const WinnerScreen = () => {
	const { movieList } = useContext(CTX);
	const [titleVal, setTitleVal] = useState('hello');
	const [posterVal, setPosterVal] = useState('');

	//helpers
	const highestVote = Math.max(...movieList.map((o) => o.voteCount), 0);
	const winner = movieList.filter((movie) => {
		return movie.voteCount === highestVote;
	});

	useEffect(() => {
		setTitleVal(
			winner && winner[0] && winner[0].title ? winner[0].title : titleVal
		);
		setPosterVal(
			winner && winner[0] && winner[0].poster_path
				? 'https://image.tmdb.org/t/p/w300/' + winner[0].poster_path
				: posterVal
		);
	}, [highestVote]);

	return (
		<div className='container'>
			<div className='winner-content'>
				{posterVal === '' ? (
					<h1 className='round-one'>Round 1</h1>
				) : (
					<>
						<img className='poster' src={posterVal} />
						<h1 className='title'>{titleVal}</h1>
					</>
				)}
			</div>
		</div>
	);
};

export default WinnerScreen;
