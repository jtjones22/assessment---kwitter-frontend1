import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs"
import { Button, Form } from "semantic-ui-react";

class UpdateU extends React.Component {
  state = { about: this.props.bio, displayName: this.props.displayName, password: "" };

  handlePatchUser = e => {
    e.preventDefault();
    this.props.patchUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <Form id="login-form" onSubmit={this.handlePatchUser}>
          <label htmlFor="about">Bio</label>
          <Form.Input
            defaultValue={this.props.bio}
            type="text"
            name="about"
            autoFocus
            onChange={this.handleChange}
          />
          <label htmlFor="displayName">Display Name</label>
          <Form.Input
            defaultValue={this.props.displayName}
            type="text"
            name="displayName"
            autoFocus
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password*</label>
          <Form.Input type="password" name="password" onChange={this.handleChange} />
          <Button type="submit" disabled={loading}>
            Update Account
          </Button>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "patchUser")(UpdateU);
