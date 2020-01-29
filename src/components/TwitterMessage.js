import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = { message: "" };
  }

  updateMessage = evt => {
    this.setState({ message: evt.target.value });
  }

  render() {
    return (
      <div>
        <strong>Your message: </strong>
        <input
          type="text"
          name="message"
          id="message"
          value={this.state.message}
          onChange={e => this.updateMessage(e)}
        />
        <span style={{ marginLeft: "2%"}}><small style={{color: "#666633", fontFamily: "'Courier New', Courier, Consolas, sans-serif, serif" }}>Remaining characters: </small> {(this.props.maxChars - this.state.message.length)}</span>
      </div>
    );
  }
}

export default TwitterMessage;
