import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetText: ""
    };
  }

  handleChange = e=> {
    this.setState({
      tweetText: e.target.value
    })
  }

  render() {
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweetText} onChange={this.handleChange}/>
        <small>{this.props.maxChars-this.state.tweetText.length} characters remaining</small>
      </div>
    );
  }
}

export default TwitterMessage;
