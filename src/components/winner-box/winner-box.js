import React, { useEffect, useState, useContext } from 'react';
import './winner-box.css';

const WinnerBox = () => {
	// place holder until props are provided
	return (
		<div className='container'>
			<div className='content'>
				<img
					className='poster'
					src={'https://image.tmdb.org/t/p/w300/' + choice.poster_path}
				/>
				<div className='text'>
					<h1 className='title'>{choice.title}</h1>
					<p>{choice.tagline}</p>
				</div>
			</div>
		</div>
	);
};

export default WinnerBox;
