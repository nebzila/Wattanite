import React, { useState, useContext, FormEventHandler } from 'react';
import './start-screen.css';
import { mainContext } from '../main-box/main-box';

const StartScreen = () => {
	const [name, setName] = useState('');
	const [postCode, setPostcode] = useState('');
	const { setPage, setFormData, formData } = useContext(mainContext);

	function submitHandler(event: any ) {
		event.preventDefault();
		setName('');
		setPostcode('');
		setFormData({ ...formData, name: name, postcode: postCode });
		setPage('movies');
	}

	return (
		<div className='start-screen'>
			<form className='inputs' onSubmit={submitHandler}>
				<div className='desc'>
					<p>Enjoy your night without a fight.</p>
					<p>Vote as a group from a selection of the current</p>
					<p>best movies and the best food local to you.</p>
				</div>
				<div className='fields'>
					<div className='name-input'>
						<h2>Name</h2>
						<input
							type='text'
							placeholder='Enter your name...'
							onChange={(event) => setName(event.target.value)}
							required
						></input>
					</div>
					<div className='postcode-input'>
						<h2>Postcode</h2>
						<input
							type='text'
							placeholder='Enter your postcode...'
							onChange={(event) => setPostcode(event.target.value)}
							required
						></input>
					</div>
				</div>
				<button className='submit-button' type='submit'>
					Start
				</button>
			</form>
		</div>
	);
};

export default StartScreen;
