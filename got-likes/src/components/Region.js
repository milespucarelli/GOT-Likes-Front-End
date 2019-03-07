import React, { Component } from "react"
import CharacterProfile from "./CharacterProfile"
import HouseContainer from "./HouseContainer"

// inside of Region there are two options, HouseContainer and CharacterProfile
class Region extends Component {

  state = {
    houses: [],
    currentHouse: "",
    filteredCharacters: []
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
    this.setState({
      currentHouse: houseName,
      filteredCharacters: this.props.characters.data.filter(character => {
        return character["attributes"]["house"] === houseName
      })
    })
  }

  render() {
    return (
      <div id="region">
        <h1 className="region-name">{this.props.name}</h1>
        <div className="split">
          <HouseContainer houses={this.state.houses} clickHandler={this.houseClickHandler} />
          <CharacterProfile characters={this.state.filteredCharacters}/>
        </div>
      </div>
    )
  }
}

export default Region;
