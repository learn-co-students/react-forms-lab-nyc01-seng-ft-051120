import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username.length > 0 && password.length > 0) {
      this.props.handleLogin({username, password})
    }
  }


  render() {
    console.log(this.state);
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              value={this.state.username}
              name="username"
              type="text"
              onChange={event => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              value={this.state.password}
              name="password"
              type="password"
              onChange={event => this.handleChange(event)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
