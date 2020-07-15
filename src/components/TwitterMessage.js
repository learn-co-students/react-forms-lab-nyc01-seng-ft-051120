import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessageChange=(e)=>{
    this.setState({message: e.target.value})
  }
  
  render() {
    console.log(this.props.maxChar)
    return (
      <div>
        <strong>Your message: {parseInt(this.props.maxChars)-parseInt(this.state.message.length)} </strong>
        <input type="text" name="message" id="message" onChange={this.handleMessageChange} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
