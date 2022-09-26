import React, { useContext } from 'react';
import { mainContext } from '../main-box/main-box';
import './winner-option.css';

const WinnerOption = () => {
	const CTX = useContext(mainContext);
	console.log('ctx winner option', CTX);

	return (
		<div className='container'>
			<div className='winner-content'>
				<h1>Winner</h1>
			</div>
		</div>
	);
};

export default WinnerOption;

//old code
// const [titleVal, setTitleVal] = useState('hello');
// const [posterVal, setPosterVal] = useState('');

// //helpers
// const highestVote = Math.max(...movieList.map((o) => o.voteCount), 0);
// const winner = movieList.filter((movie) => {
// 	return movie.voteCount === highestVote;
// });

// useEffect(() => {
// 	setTitleVal(
// 		winner && winner[0] && winner[0].title ? winner[0].title : titleVal
// 	);
// 	setPosterVal(
// 		winner && winner[0] && winner[0].poster_path
// 			? 'https://image.tmdb.org/t/p/w300/' + winner[0].poster_path
// 			: posterVal
// 	);
// }, [highestVote]);
