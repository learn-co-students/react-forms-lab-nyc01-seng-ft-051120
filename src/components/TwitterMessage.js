import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      characterRemaining: 280
    };
  }

  handleChange = event => {
    let contentLength = event.target.value.length
    let charsLeft = this.props.maxChars - contentLength
    this.setState({
      content:event.target.value,
      characterRemaining: charsLeft
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.content} 
          name="message" 
          id="message" 
          onChange={(event) => this.handleChange(event)}
        />
        <h3>Characters Remaining: {this.state.characterRemaining}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
