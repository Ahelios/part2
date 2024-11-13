import React from 'react'
import { useState } from 'react'

function Search({onFilter}) {
  const [inputValue, setInputValue] = useState('');

  function handleSetSearchedName(event) {
		const value = event.target.value;
		setInputValue(value);
    onFilter(value);
	}

  return (
    <input value={inputValue} onChange={handleSetSearchedName} />
  )
}

export default Search