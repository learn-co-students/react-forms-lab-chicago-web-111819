import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputValue: "",
      charsLeft: null
    };
  }

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.inputValue} maxLength={this.props.maxChars} onChange={this.handleChange}/>
        <br/>
        <p>Characters Left: {this.state.charsLeft}/{this.props.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;