import React, {Component} from "react";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  // value presence check
  isEmpty = value => !value;

  updateDataLocally = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  notifyParentOfNewData = e => {
    e.preventDefault()
    if (this.isEmpty(this.state.username) || this.isEmpty(this.state.password)) {
      console.log("Username or password empty; please fill both in...");
      return;
    } else {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.notifyParentOfNewData}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.updateDataLocally}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.updateDataLocally}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;


