import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value
    })
  }

  // this.prop.maxChars
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleMessage(event)} name="message" id="message" value={this.state.message} />
        <div><span>Remaining Characters: {this.props.maxChars - (this.state.message != '' ? this.state.message.length : 0)}</span></div>
      </div>
    );
  }
}

export default TwitterMessage;
