import React, { Component } from "react";

class SignUp extends Component {

  state = {
    username: "",
    password: ""
  }

  createAccount = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: {
        username: this.state.username,
        password: this.state.password
      }})
    })

  }

  signup = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="login">
        <label for="username">Username: </label>
        <input type="text" name="username" onChange={this.signup} value={this.state.username} />
        <label for="password">Password: </label>
        <input type="text" name="password" onChange={this.signup} value={this.state.password} />
        <button onClick={this.createAccount}> Create Account </button>
      </div>
    )
  }
}

export default SignUp;
