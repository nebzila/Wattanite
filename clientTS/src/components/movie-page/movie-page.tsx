import React, { useState, useEffect } from 'react';
import './movie-page.css';
import { getMovies } from '../../Services/server-service';
import MovieOption from '../movie-option/movie-option';
import Loading from '../loading/loading';

import { MovieType } from '../../allTypes';

const MoviePage = () => {

	const [movieList, setMovieList] = useState<MovieType[]>([]);

	useEffect(() => {
		getMovies().then((result) => {
			setMovieList(result.slice(0, 6));
		});
	}, []);

	return !movieList[0] ? (
		<Loading />
	) : (
		<div data-testid="moviePage-div" className='movie-page'>
			{movieList.map((movie) =>
				 <MovieOption key={movie.id} {...movie}></MovieOption>
			)}
		</div>
	);
};
export default MoviePage;
