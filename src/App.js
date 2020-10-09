import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import Header from './components/Header'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  let [ characters, setCharacters ] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/people')
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        debugger
      })
  }, [])


  return (
    <div>
      <Header />
      <Character characters={characters}/>
    </div>
  );
}

export default App;
