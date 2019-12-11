import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import { Form, FormTextArea, Button } from "semantic-ui-react";

class CreateMessageForm extends React.Component {
  state = { 
    text: ""
  };

  handlePostMessage = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: ""});
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="login-form" onSubmit={this.handlePostMessage}>
          <label htmlFor="text">Your Message</label>
          <FormTextArea
            placeholder="What do you want to say?"
            type="text"
            name="text"
            autoFocus
            required
            onChange={this.handleChange}
            value={this.state.text}
          />
          <Button type="submit" disabled={loading}>
            Kweet this!
          </Button> 
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("messages", "postMessage")(CreateMessageForm);