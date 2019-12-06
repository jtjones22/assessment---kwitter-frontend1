import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";

class CreateMessageForm extends React.Component {
  state = { 
    text: ""
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="text">Your Message</label>
          <input
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Post this!
          </button> 
        </form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(CreateMessageForm);