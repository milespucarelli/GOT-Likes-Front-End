import React, { Component } from "react";

class CharacterCard extends Component {
  render() {
    const { attributes } = this.props.character
    console.log("hi from CharacterCard", this.props)
    return (
      <div className="card">
        <img className="card-img-top" src={require(`./got_images/${attributes.name}.jpg`)} alt="Card image" />
        <div className="card-body">
        <h4 className="card-title">{attributes.name}</h4>
        <p className="card-text">{attributes.gender}</p>
        <p className="card-text">{attributes["played-by"]}</p>
        <button>💔</button>
        <a href="#" className="btn btn-primary">See Profile</a>
        <button>❤️</button>
        </div>
      </div>
    )
  }
}

export default CharacterCard;
