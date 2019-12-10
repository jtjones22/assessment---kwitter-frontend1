import React from "react";
import { Spinner, Link } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import "semantic-ui-css/semantic.min.css";
import { Form, Button } from "semantic-ui-react";

class RegisterForm extends React.Component {
  state = { username: "", displayName: "", password: "" };

  handleRegister = e => {
    e.preventDefault();
    this.props.postUser(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <div style={{
        paddingLeft:'20px'
      }}>
        <h2>Create your new account</h2>
        <Form onSubmit={this.handleRegister}>
          <Form.Input
            style={{
              width: "30%"
            }}
            fluid
            className="form-subcomponent-shorthand-input-first-name"
            label="Username"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
          <Form.Input
            style={{
              width: "30%"
            }}
            fluid
            className="form-subcomponent-shorthand-input-first-name"
            label="Display Name"
            placeholder="Display Name"
            name="displayName"
            onChange={this.handleChange}
          />
          <Form.Input
            style={{
              width: "30%"
            }}
            fluid
            className="form-subcomponent-shorthand-input-first-name"
            label="Password"
            placeholder="Password"
            name="password"
            type="password"
            onChange={this.handleChange}
          />
          <Button
            style={{
              width: "20%",
              borderBottom: '2px solid blue'
            }}
            type="submit"
            disabled={loading}
          >
            Register new account
          </Button>
          <br></br>
          <Link to="/">
            <Button
              style={{
                width: "20%",
                borderBottom: '2px solid red'
              }}
              disabled={loading}
            >
              Login Page
            </Button>
          </Link>
        </Form>
        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </div>
    );
  }
}

export default withAsyncAction("users", "postUser")(RegisterForm);
