import './App.css';
import MainBox from './components/main-box/main-box';
import SideBar from './components/side-bar/side-bar';
import TopBox from './components/top-box/top-box';
import { getMovies } from './Services/ApiClient';
import React, { useState, useEffect, createContext } from 'react';
export const CTX = createContext();

function App() {
	// tracking the movies state, add food after
	const [movieList, setMovieList] = useState([]);
	const [voteCount, setVoteCount] = useState(0);

	useEffect(() => {
		getMovies().then((result) => {
			setMovieList(result.slice(0, 6));
		});
	}, []);

	return (
		// providing context of these values to your whole app
		<CTX.Provider value={{ movieList, voteCount, setVoteCount }}>
			<div className='App'>
				<div className='left'>
					<SideBar></SideBar>
				</div>
				<div className='right'>
					<TopBox></TopBox>
					<MainBox></MainBox>
				</div>
			</div>
		</CTX.Provider>
	);
}

export default App;
