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

  let characterURL;

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
            if (id === 0) {
              characterURL = "https://i.pinimg.com/736x/20/10/db/2010db57211d582eb2ce42f5c7fefe12.jpg";
            } else if (id === 1) {
              characterURL = "https://images.immediate.co.uk/production/volatile/sites/3/2019/10/EP9-FF-001686-336e75b.jpg?quality=90&resize=768,574";
            } else if (id === 2) {
              characterURL = "https://starwarsblog.starwars.com/wp-content/uploads/2018/08/star-wars-r2-d2-tall-image.jpg";
            } else if (id === 3) {
              characterURL = "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=960";
            } else if (id === 4) {
              characterURL = "https://www.themarysue.com/wp-content/uploads/2018/06/leia-organa-star-wars.png";
            } else if (id === 5) {
              characterURL = "https://sm.askmen.com/askmen_in/topten/o/owen-lars/owen-lars_qt6s.jpg";
            }
            return <Character characterURL={characterURL} key={id} character={character} />;
          })}
      </div>
    </div>
  );
};

export default App;
