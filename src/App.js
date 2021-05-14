import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import CharacterList from './components/CharacterList';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  // const[character, setCharacter] = useState("");
  const[characters, setCharacters] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.dev/api/people")       
     .then(res => {
      //  console.log(res.data) 
       setCharacters(res.data)
       })
     .catch((err) => {
       debugger
       })
 }, []);


  return (
    <div className="App">
      <Header />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
