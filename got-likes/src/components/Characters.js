import React, { Component } from "react";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  fetch(`http://localhost:3000/api/v1/characters`)
  .then(res => res.json())
  .then(characters => {
    return characters.data.map(character => {
      return <CharacterCard character={character} />
    })
  })
}

export default Characters;
