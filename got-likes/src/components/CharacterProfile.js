import React, { Component } from "react";
import CharacterContainer from "./CharacterContainer";

class CharacterProfile extends Component {
  render() {
    return (
      <div id='characters'>
        <CharacterContainer characters={this.props.characters}/>
      </div>
    )
  }
}

export default CharacterProfile;
