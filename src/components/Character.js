// Write your Character component here
import React from "react";
import styled, { keyframes } from "styled-components";

const CharacterDivKeyFrame = keyframes`
   100% {
      opacity: 1;
      transform: scale(1);
   }
`;

const CharacterDiv = styled.div`
  width: 90%;
  padding: 20px 0px;
  margin-bottom: 20px;
  text-align: left;
  border: 2px solid white;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  transition: all 0.3s ease;

  color: ${(props) => (props.character.name === "Darth Vader" ? "#EB3C3C" : "#f7d336")};

  opacity: 0;
  transform: scale(2);
  animation: ${CharacterDivKeyFrame} 1s ease forwards;

  &:hover {
    background-color: ${(props) => (props.character.name === "Darth Vader" ? "#494949" : "#2c8ebb")};
  }

  @media (max-width: 1550px) {
    flex-direction: column;
    padding-bottom: 50px;
  }
`;

const CharacterNameH2 = styled.h2`
  font-size: 3rem;

  @media (max-width: 590px) {
    font-size: 2rem;
  }
`;

const BirthYearP = styled.p`
  font-size: 1.5rem;
  color: #6fd8a5;
`;

const OrderedList = styled.div`
  font-size: 1.5rem;
  color: #f18a1c;
`;

const CharacterListItem = styled.li`
  font-size: 1rem;
  margin-top: 20px;
  color: #eed0b0;
`;

function Character(props) {
  return (
    <CharacterDiv className="individual-character-container" character={props.character}>
      <CharacterNameH2>{props.character.name}</CharacterNameH2>
      <BirthYearP>Birth Year: {props.character.birth_year}</BirthYearP>
      <OrderedList>
        Movies Featured In:
        {props.character.films.map((film, id) => {
          return <CharacterListItem key={id}>{film}</CharacterListItem>;
        })}
      </OrderedList>
    </CharacterDiv>
  );
}

export default Character;
