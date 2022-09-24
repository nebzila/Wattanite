import React, { useEffect, useState, useContext } from 'react';
import './winner-box.css';
import { CTX } from '../../App';
const WinnerBox = () => {
	const { movieList } = useContext(CTX);
	const [titleVal, setTitleVal] = useState('hello');

	//helpers
	const highestVote = Math.max(...movieList.map((o) => o.voteCount), 0);
	const winner = movieList.filter((movie) => {
		return movie.voteCount === highestVote;
	});

	console.log('Winner ', winner);
	console.log(titleVal);
	useEffect(() => {
		setTitleVal(
			winner && winner[0] && winner[0].title ? winner[0].title : 'test'
		);
	}, [titleVal]);
	console.log(titleVal);
	return (
		<div className='container'>
			<div className='content'>
				<img
					className='poster'
					src={'https://image.tmdb.org/t/p/w300/' + winner.poster_path}
				/>
				<div className='text'>
					<h1 className='title'>{titleVal}</h1>
				</div>
			</div>
		</div>
	);
};

export default WinnerBox;
