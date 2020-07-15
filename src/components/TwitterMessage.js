import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      maxChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message} />
        <span>{this.state.maxChars} chars left</span>
      </div>
    );
  }
}

export default TwitterMessage;
