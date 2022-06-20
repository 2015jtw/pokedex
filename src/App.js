import logo from './logo.svg';
import './App.css';

// import components
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
      <h1>Pokemon Project</h1>
      <Pokegame />
    </div>
  );
}

export default App;
