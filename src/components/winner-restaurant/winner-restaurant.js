import React from 'react';
import './winner-restaurant.css';

const WinnerRestaurant = (props) => {
	return (
		<div className='restaurant-option'>
			<div className='restaurant-left'>
				<img className='restaurant-poster' src={props.value.icon} />
			</div>
			<div className='restaurant-right'>
				<div className='restaurant-text'>
					<h1 className='restaurant-title'>{props.value.name}</h1>
					<h3>{props.value.voteCount}</h3>
					<p className='restaurant-blurb'>{props.value.overview}</p>
				</div>
			</div>
		</div>
	);
};

export default WinnerRestaurant;
