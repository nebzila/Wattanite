import React, { useState, useContext, FormEvent } from 'react';
import './start-screen.css';
import { mainContext } from '../main-box/main-box';
import { Iprops } from '../../allTypes';
import { Socket } from 'socket.io-client';


const StartScreen = () => {

	// useState<MovieType[]>([]);
	const [name, setName] = useState<string>('');
	const [postCode, setPostcode] = useState<string>('');
	const { setPage, formData, setFormData } = useContext(mainContext);

	function submitHandler(event: FormEvent<HTMLFormElement> ) {
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
						<h2 aria-labelledby='nameh2'>Name</h2>
						<input
							type='text'
							aria-labelledby='nameh2'
							name="name"
							placeholder='Enter your name...'
							onChange={(event) => setName(event.target.value)}
							required
						></input>
					</div>
					<div className='postcode-input'>
						<h2 id="postcodeh2">Postcode</h2>
						<input
							name="postcode"
							aria-labelledby='postcodeh2'
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
