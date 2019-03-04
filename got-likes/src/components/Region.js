import React, { Component } from "react"
import CharacterProfile from "./CharacterProfile.js"

// inside of Region there are two options, HouseContainer and CharacterProfile
class Region extends Component {
  render() {
    return (
      <div>
      <CharacterProfile />
      <CharacterProfile />
      <CharacterProfile />
      <CharacterProfile />

      </div>
    )
  }
}

export default Region;
