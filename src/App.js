import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled, { keyframes } from "styled-components";

import Character from "./components/Character";

const TitleKeyFrame = keyframes`
   100% {
      opacity: 1;
      transform: scale(1) rotateZ(0);
   }
`;

const CharacterTitleH1 = styled.h1`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${TitleKeyFrame} 1s ease-in-out forwards;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people")
      .then((resp) => {
        setCharacters(resp.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <CharacterTitleH1 className="Header">Star Wars Characters</CharacterTitleH1>
      <div className="character-container">
        {characters &&
          characters.map((character, id) => {
            return <Character key={id} character={character} />;
          })}
      </div>
    </div>
  );
};

export default App;
