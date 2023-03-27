import '../App.css';
import CharactersList from './CharactersList';
import NewCharacterForm from './NewCharacterForm';
import Filter from './Filter.js';
import React, { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/characters')
    .then(res => res.json())
    .then(data => setCharacters(data))
  }, [])

  const handleAddChar = (newObj) => {
    

    fetch('http://localhost:3000/characters', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newObj)

    })
    .then(res => res.json())
    .then(data =>
          setCharacters([...characters, data]))

  }

  const handleDelete = (id) => {
    fetch('http://localhost:3000/characters', {
      method: 'DELETE'
    })
    
    const updatedData = characters.filter(char => char.id !== id)

    setCharacters(updatedData)
  }

  const handleUpdate = (id, character) => {

    const updatedObj = 

    fetch(`http://localhost:3000/characters/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({})

    })
    .then(res => res.json())
  }


  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        <NewCharacterForm handleAddChar={handleAddChar}/>
        <Filter />
        <CharactersList characters={characters} setCharacters={setCharacters} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
    </div>
  );
}

export default App;
