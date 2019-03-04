import React, { Component } from "react";

class CharacterCard extends Component {
  render() {
    return (
      <div class="card">
        <img class="card-img-top" src={require(`./clarke.jpg`)} alt="Card image" />
        <div class="card-body">
        <h4 class="card-title">Khaleesi</h4>
        <p class="card-text">Mother of Dragons</p>
        <button>💔</button>
        <a href="#" class="btn btn-primary">See Profile</a>
        <button>❤️</button>
        </div>
      </div>
    )
  }
}

export default CharacterCard;
