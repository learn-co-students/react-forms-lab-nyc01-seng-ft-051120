import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleMessage = e => {
    this.setState({
      message: e.target.value
    })
  }

  // showMessage = () => {
  //   if (this.state.message.length <= this.props.maxChars){
  //     return(
        
  //         // this.state.message
  //       `Character counter: ${this.props.maxChars - this.state.message.length}`
  //     )
  //   }
  //   else {
  //     return(
        
  //         "Your message is too long."
        
  //         )
  //       }
  //     }
      
      render() {
        // console.log(this.state.message.length);
        // console.log(this.props.maxChars);
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={e => this.handleMessage(e)}/>
        {/* {this.showMessage()} */}
        <p>Character Counter: {this.props.maxChars - this.state.message.length}</p>
      </div>
   );
  }
}

export default TwitterMessage;
