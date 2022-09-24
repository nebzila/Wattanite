import React from 'react';
import './side-bar.css';
import WinnerBox from '../winner-box/winner-box';

const SideBar = () => {
	return (
		<div className='side-bar'>
			<h3 className='side-title'>Side Title</h3>

			<WinnerBox></WinnerBox>
		</div>
	);
};

export default SideBar;
