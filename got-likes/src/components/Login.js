import React, { Component } from "react";

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  login = event => {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  createAccount = event => {
    event.preventDefault()
    this.props.loggingIn(this.state)
  }

  render() {
    // console.log("props", this.props)
    return (
      <div className="login">
        <label for="username">Username: </label>
        <input type="text" name="username" onChange={this.login} value={this.state.username} />
        <label for="password">Password: </label>
        <input type="text" name="password" onChange={this.login} value={this.state.password} />
        <button onClick={this.createAccount}> Login </button>
      </div>
    )
  }
}

export default Login;
