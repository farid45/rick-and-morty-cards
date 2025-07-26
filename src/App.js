import React from 'react';
import './App.css';
import CharacterCard from './components/CharacterCard/CharacterCard';

function App() {
  return (
    <div className="app">
      <h1>Rick and Morty Characters</h1>
      <CharacterCard />
    </div>
  );
}

export default App;