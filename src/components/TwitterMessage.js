import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     message: ''
    };
  }
   
  watchMessage = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charNum = this.props.maxChars - this.state.message.length
    console.log(charNum)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.watchMessage} value={this.state.message}type="text" name="message" id="message"></input>
          <p>{charNum} characters left</p>
 
      </div>
    );
  }
}

export default TwitterMessage;
