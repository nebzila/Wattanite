import React, { useContext } from 'react';
import { CTX } from '../../App';
import './option-box.css';
const OptionBox = (props) => {
	const { voteCount, setVoteCount } = useContext(CTX);

	return (
		<div className='option-box'>
			<div className='content'>
				<img
					className='poster'
					src={'https://image.tmdb.org/t/p/w300/' + props.movie.poster_path}
				/>
				<div className='text'>
					<h1 className='title'>{props.movie.title}</h1>
					<p className='blurb'>{props.movie.overview}</p>
				</div>
			</div>
			<button
				className='vote-button'
				onClick={() => setVoteCount(voteCount + 1)}
			>
				+ 1
			</button>
		</div>
	);
};

export default OptionBox;
