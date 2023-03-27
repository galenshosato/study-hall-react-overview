import '../App.css';
import CharactersList from './CharactersList';
import NewCharacterForm from './NewCharacterForm';
import Filter from './Filter.js';

function App() {
  return (
    <div className="App">
        <img alt='logo' className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monsters%2C_Inc._logo.svg/1280px-Monsters%2C_Inc._logo.svg.png'/>
        <NewCharacterForm />
        <Filter />
        <CharactersList />
    </div>
  );
}

export default App;
