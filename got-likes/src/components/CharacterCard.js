import React, { Component } from "react";

class CharacterCard extends Component {

  like = () => {
    if(localStorage.token) {
      console.log("AYyyyyyyyyyy")
      fetch("http://localhost:3000/api/v1/likes", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // need to pass in the user id and character id
          like: {
            user_id: 1,
            character_id: this.props.character.id
          }
        })
      }).then(res => res.json()).then(data => console.log(data))

    } else {
      alert("You need to log in dude")
    }
  }

  dislike = () => {
    if(localStorage.token) {
      console.log("AYyyyyyyyyyy")
    } else {
      console.log("You need to log in")
    }
  }

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
        <button onClick={this.like}>💔</button>
        <a href="#" className="btn btn-primary">See Profile</a>
        <button onClick={this.like}>❤️</button>
        </div>
      </div>
    )
  }
}

export default CharacterCard;
