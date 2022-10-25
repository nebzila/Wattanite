import './App.css';
import MainBox from './components/main-box/main-box';
import React from 'react';
import * as socketIO from "socket.io-client";
const socket = socketIO.connect('http://localhost:3002');


function App() {
	return (
		<div className='App'>
			<MainBox socket={socket}></MainBox>
		</div>
	);
}

export default App;
