import { useState } from 'react';
import Persons from './components/Persons';
import Personform from './components/Personform';
import Search from './components/Search';

function App() {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	]);
	
	const [searchedValue, setSearchedValue] = useState('');

	function handleSetPersons(newPerson) {

		const nameExists = persons.some(
			(person) =>
				person.name === newPerson.name ||
				person.number === newPerson.number
		);

    nameExists
    ? alert(`${newPerson.name} is already added to phonebook`)
    : setPersons(persons.concat({
        ...newPerson,
        id: persons[persons.length - 1].id + 1
    }));
    
	}

	function handleSetSearchedValue(value){
		setSearchedValue(value)
	}

  const filteredPersons = filterPersons(searchedValue)

	function filterPersons(value){
    return persons.filter(
      (person) =>
        person.name.toLowerCase().includes(value) ||
        person.number.includes(value)
    );
  }

	return (
		<div>
			<h2>Phonebook</h2>
			<Search onFilter={handleSetSearchedValue} />
			<h2>Add new contact</h2>
			<Personform onSubmit={handleSetPersons} />
			<h2>Numbers</h2>
			<Persons persons={filteredPersons} />
		</div>
	);
}

export default App;
