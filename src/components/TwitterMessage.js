import React from "react";

class TwitterMessage extends React.Component {
state={
  message:''
}
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  render() {
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
        value={this.state.message}
        onChange={this.handleChange}
        />
        {charNumber}
      </div>
    );
  }
}

export default TwitterMessage;
