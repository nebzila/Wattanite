import './App.css';
import MainBox from './components/main-box/main-box';
import SideBar from './components/side-bar/side-bar';
import TopBox from './components/top-box/top-box';
import React from 'react';

function App() {
	return (
		// providing context of these values to your whole app

		<div className='App'>
			<div className='left'>
				<SideBar></SideBar>
			</div>
			<div className='right'>
				<TopBox></TopBox>
				<MainBox></MainBox>
			</div>
		</div>
	);
}

export default App;
