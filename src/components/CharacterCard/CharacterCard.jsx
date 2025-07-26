import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterCard.css';

const CharacterCard = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const fetchCharacter = async () => {
    try {
      setLoading(true);
      const randomId = Math.floor(Math.random() * 826) + 1;
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${randomId}`);
      setCharacter(response.data);
    } catch (error) {
      console.error('Error fetching character:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  if (loading) return <div className="card loading">Loading...</div>;

  return (
    <div className={`card ${darkMode ? 'dark' : ''}`}>
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-content">
        <h2>{character.name}</h2>
        <p>Status: <span style={{ color: character.status === 'Alive' ? 'green' : 'red' }}>
          {character.status}
        </span></p>
        <p>Species: {character.species}</p>
        <p>Origin: {character.origin.name}</p>
        <div className="buttons">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button onClick={fetchCharacter} className="secondary">
            New Character
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;