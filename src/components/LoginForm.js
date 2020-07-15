import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  changeName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  doIt = (e) => {
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    if (username === '' || password === ''){
      alert('fields cannot be blank')
    }
    else
       this.props.handleLogin({username, password})
       this.setState({
      
        username: '',
        password: ''
      
       })
  }

  render() {
    return (
      <form onSubmit={this.doIt}>
        <div>
          <label>
            Username
            <input onChange={this.changeName} value={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changePassword} value={this.state.password}id="password" name="password" type="password" />
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
