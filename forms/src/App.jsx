import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import Personform from './components/Personform';
import Search from './components/Search';
// import axios from 'axios';
import services from './services'

function App() {
	const [persons, setPersons] = useState([]);

	const [searchedValue, setSearchedValue] = useState('');

	useEffect(() => {
		services.getAllPersons()
		.then((response) => {
			setPersons(response.data);
			console.log(`This is the list of persons returned upon first render `, response.data);
		});
	}, []);

	function handleSetPersons(newPerson) {
		const nameExists = persons.some(
			(person) =>
				person.name === newPerson.name || person.number === newPerson.number
		);

		nameExists
			? alert(`${newPerson.name} is already added to phonebook`)
			: setPersons(
					persons.concat({
						...newPerson,
						id: String(persons[persons.length - 1].id + 1),
					})
			  );
	}

	function handleSetSearchedValue(value) {
		setSearchedValue(value);
	}

	function handleDeletePerson(id){
		const personToDelete = persons.find(person => person.id === id);

		if(window.confirm(`Are you sure you want to delete ${personToDelete.name}?`)){
		services.deletePerson(id)
		.then(() => {
			setPersons(persons.filter(person => person.id !== id))
		})
	}
	}

	const filteredPersons = filterPersons(searchedValue);

	function filterPersons(value) {
		if (!value) return persons;

		return persons.filter(
			(person) =>
				person.name.toLowerCase().includes(value) ||
				person.number.includes(value)
		);
	}

	return (
		<div>
			<h2>Phonebook</h2>
			<Search handleSetSearchedValue={handleSetSearchedValue} />
			<h2>Add new contact</h2>
			<Personform handleSetPersons={handleSetPersons} />
			<h2>Numbers</h2>
			<Persons persons={filteredPersons} onDelete={handleDeletePerson}/>
		</div>
	);
}

export default App;
