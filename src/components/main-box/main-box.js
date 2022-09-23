import React, { useState, useEffect, useContext } from 'react';
import './main-box.css';
import OptionBox from '../option-box/option-box';
import { getMovies } from '../../Services/ApiClient';
import { CTX } from '../../App';

const MainBox = () => {
	const { movieList } = useContext(CTX);

	return (
		<div className='main-box'>
			{movieList.map((movie) => (
				<OptionBox key={movie.id} movie={movie}></OptionBox>
			))}
		</div>
	);
};

export default MainBox;

// update your option box vraibles now that they're getting a diferent result from the api
