// Write your Character component here
import React from "react";
import styled from "styled-components";

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

  &:hover {
    background-color: ${(props) => (props.character.name === "Darth Vader" ? "#494949" : "#2c8ebb")};
  }
`;

const CharacterNameH2 = styled.h2`
  font-size: 3rem;
`;

const BirthYearP = styled.p`
  font-size: 1.5rem;
`;

const OrderedList = styled.div`
  font-size: 1.5rem;
`;

const CharacterListItem = styled.li`
  padding: 5px 0;
  font-size: 1rem;
`;

function Character(props) {
  return (
    <CharacterDiv character={props.character}>
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
