import React from 'react';
import { useState } from 'react';

function Personform({ onSubmit }) {
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	function handleSetNewName(event) {
		setNewName(event.target.value);
	}

	function handleSetNewNumber(event) {
		setNewNumber(event.target.value);
	}

	function handleSubmit(){
		event.preventDefault();
		onSubmit({
			name: newName,
			number: newNumber
		});
		setNewName('');
		setNewNumber('');
	}



	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					name: <input value={newName} onChange={handleSetNewName} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleSetNewNumber} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
		</>
	);
}

export default Personform;
