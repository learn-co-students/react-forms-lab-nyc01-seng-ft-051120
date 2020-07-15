import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
handleChange=e=>{
  // e.preventDefault()
  this.setState({[e.target.name] : e.target.value})
}
handleLogin = event => {
  event.preventDefault()

  if (!this.state.username || !this.state.password) return

  this.props.handleLogin(this.state)
}
  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input name='username'id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input name='password' id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
