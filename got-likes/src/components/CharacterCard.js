import React, { Component } from "react";

class CharacterCard extends Component {
  render() {
    const { attributes } = this.props.character
    console.log("hi from CharacterCard", this.props)
    return (
      <div class="card">
        <img class="card-img-top" src={require(`./clarke.jpg`)} alt="Card image" />
        <div class="card-body">
        <h4 class="card-title">{attributes.name}</h4>
        <p class="card-text">{attributes.gender}</p>
        <p class="card-text">{attributes["played-by"]}</p>
        <button>💔</button>
        <a href="#" class="btn btn-primary">See Profile</a>
        <button>❤️</button>
        </div>
      </div>
    )
  }
}

export default CharacterCard;
