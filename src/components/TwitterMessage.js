import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
        this.state = {
          message: ''
        }
    }

  handleChange = event => {
       this.setState({
         [event.target.name]: event.target.value
       })
    }


  render() {
     let remainingChars = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  onChange={this.handleChange} name="message" id="message" value={this.state.message}/>
        {remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
