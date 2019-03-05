import React, { Component } from "react"
import CharacterProfile from "./CharacterProfile"
import HouseContainer from "./HouseContainer"

// inside of Region there are two options, HouseContainer and CharacterProfile
class Region extends Component {
  state = {
    houses: [],
    currentHouse: "",
    characters: []
  }

  componentDidMount = () => {
    fetch(`http://localhost:3000/api/v1/regions/${this.props.name}`)
    .then(res => res.json())
    .then(houses => {
      this.setState({
        houses: houses
      })
    })
  }

  houseClickHandler = houseName => {
    console.log("ayyyyy", houseName)
    fetch(`http://localhost:3000/api/v1/characters`)
    .then(res => res.json())
    .then(characters => {
      this.setState({
        currentHouse: houseName,
        characters: characters.data.filter(character => {
          return character["attributes"]["house"] === houseName
        })
      })
    })
  }

  render() {
    return (
      <div>
        <h1 className="region">{this.props.name}</h1>
        <div className="split">
          <HouseContainer houses={this.state.houses} clickHandler={this.houseClickHandler} />
          <CharacterProfile characters={this.state.characters}/>
        </div>
      </div>
    )
  }
}

export default Region;
