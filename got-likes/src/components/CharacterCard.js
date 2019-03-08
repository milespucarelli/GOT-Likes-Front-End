import React, { Component } from "react";

class CharacterCard extends Component {
  state = {
    likes: this.props.character.relationships.likes.data.length
  }

  like = () => {
    if(localStorage.token) {
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
      })
      .then(res => res.json())
      .then(() => this.setState({likes: this.state.likes + 1}))

    } else {
      alert("You need to log in dude")
    }
  }

  dislike = () => {
    if(localStorage.token) {
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
      })
      .then(res => res.json())
      .then(() => this.setState({likes: this.state.likes - 1}))

    } else {
      alert("You need to log in dude")
    }
  }

  render() {
    const { attributes } = this.props.character
    console.log("hi from CharacterCard", this.state.likes)
    return (
      <div className="card">
        <img className="card-img-top" src={require(`./got_images/${attributes.name}.jpg`)} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{attributes.name}</h4>
          <p className="card-text">{attributes.gender}</p>
          <p className="card-text">{attributes["played-by"]}</p>
          <button onClick={this.dislike}>💔</button>
          <p>Likes: {this.state.likes}</p>
          <button onClick={this.like}>❤️</button>
        </div>
      </div>
    )
  }
}

export default CharacterCard;
