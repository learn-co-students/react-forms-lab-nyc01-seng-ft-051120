import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  // handleLogin={this.login}
  // this.props.handleLogin 
  // login = ({ username, password }) => {
  //   console.log(`Logging in ${username} with password ${password}`);
  // };
  // this.props.handleLogin()

  onChangeUsername = event => {
    this.setState({
      username: event.target.value 
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value 
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username != '' && this.state.password != '') {
      this.setState({
        username: this.state.username,
        password: this.state.password
      })
      this.props.handleLogin(this.state.username, this.state.password)
    } else {
      alert('You must enter a username and password')
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" onChange={event => this.onChangeUsername(event)}type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" onChange={event => this.onChangePassword(event)} type="password" value={this.state.password}/>
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
