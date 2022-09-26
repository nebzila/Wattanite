import React from 'react';
import './side-bar.css';
import WinnerOption from '../winner-option/winner-option';

const SideBar = () => {
	return (
		<div className='side-bar'>
			<h3 className='side-title'>Side Title</h3>

			<WinnerOption />
		</div>
	);
};

export default SideBar;
