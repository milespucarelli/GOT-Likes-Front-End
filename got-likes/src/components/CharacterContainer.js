import React, { Component } from "react";
import CharacterCard from "./CharacterCard";

class CharacterContainer extends Component {
  render() {
    return (
      <div className="character_container">
        <CharacterCard />
      </div>
    )
  }
}

export default CharacterContainer;
