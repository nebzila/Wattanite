import React, { useContext, useState, useEffect } from 'react';
import './movie-page.css';
import { getMovies } from '../../Services/movie-service';
import MovieOption from '../movie-option/movie-option';
//clear this out
//import { CTX } from '../../App';
const MoviePage = () => {
	//clear this out later
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		getMovies().then((result) => {
			setMovieList(result.slice(0, 6));
		});
	}, []);
	console.log(movieList);
	return movieList === [] ? (
		<h1>Loading</h1>
	) : (
		<div className='movie-page'>
			{movieList.map((movie) => (
				<MovieOption key={movie.id} value={movie}></MovieOption>
			))}
		</div>
	);
};
export default MoviePage;

//const { totalVotes, setTotalVotes } = useContext(CTX);
