import React, { Component } from "react";

class House extends Component {
  render() {
    let {name, coatOfArms, words, seats, clickHandler} = this.props
    return (
      <div className="house" onClick={() => clickHandler(name) } >
        <h3>{name}</h3>
        <p>Coat Of Arms: <br/> {coatOfArms}</p>
        <p>Words: <br/> {words}</p>
        <p>Seats: <br/> {seats.join(', ')}</p>
      </div>
    )
  }
}

export default House;
