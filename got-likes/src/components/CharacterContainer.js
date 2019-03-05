import React, { Component } from "react";
import CharacterCard from "./CharacterCard";

class CharacterContainer extends Component {
  character = () => {
    return this.props.characters.map(character => {
      return <CharacterCard character={character} key={character.id} />
    })
  }

  render() {
    return (
      <div> {this.character()} </div>
    )
  }
}

export default CharacterContainer;
