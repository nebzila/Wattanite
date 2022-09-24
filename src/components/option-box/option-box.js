import React, { useContext, useState } from 'react';
import { CTX } from '../../App';
import './option-box.css';
const OptionBox = (props) => {
	const { totalVotes, setTotalVotes } = useContext(CTX);
	return (
		<div className='option-box'>
			<div className='content'>
				<img
					className='poster'
					src={'https://image.tmdb.org/t/p/w300/' + props.movie.poster_path}
				/>
				<div className='text'>
					<h1 className='title'>{props.movie.title}</h1>
					<h3>{props.movie.voteCount}</h3>
					<p className='blurb'>{props.movie.overview}</p>
				</div>
			</div>
			<button
				className='vote-button'
				onClick={() => {
					props.movie.voteCount++;
					setTotalVotes(totalVotes + 1);
				}}
			>
				+ 1
			</button>
		</div>
	);
};

export default OptionBox;
