import React from 'react';
import './loading.css';

const Loading = () => {
	return (
		<div data-testid="loadingdiv" className='lds-roller'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loading;
