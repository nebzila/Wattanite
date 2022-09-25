import React, { useState, useContext } from 'react';
import './start-screen.css';
import { mainContext } from '../main-box/main-box';

const StartScreen = () => {
	const [name, setName] = useState('');
	const [postCode, setPostcode] = useState('');
	const { setPage, setFormData, formData } = useContext(mainContext);

	function submitHandler(event) {
		event.preventDefault();
		setName('');
		setPostcode('');
		setFormData({ ...formData, name: name, postcode: postCode });
		setPage('movies');
	}

	return (
		<form onSubmit={submitHandler}>
			<h1> Start </h1>
			<input
				type='text'
				placeholder='Enter your name...'
				onChange={(event) => setName(event.target.value)}
			></input>
			<input
				type='text'
				placeholder='Enter your postcode...'
				onChange={(event) => setPostcode(event.target.value)}
			></input>
			<button type='submit'>Let's go!</button>
		</form>
	);
};

export default StartScreen;
