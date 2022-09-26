import React from 'react';
import './side-bar.css';
import WinnerScreen from '../winner-screen/winner-screen';

const SideBar = () => {
	return (
		<div className='side-bar'>
			<h3 className='side-title'>Side Title</h3>

			<WinnerScreen></WinnerScreen>
		</div>
	);
};

export default SideBar;
