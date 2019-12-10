import React from "react";
import { Link } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    
    return (
            <Segment placeholder>
            <Grid columns={2} relaxed='very' stackable>
              <Grid.Column>
                <Form id="login-form" onSubmit={this.handleLogin}>
                  <Form.Input
                    icon='user'
                    iconPosition='left'
                    type="text"
                    name="username"
                    autoFocus
                    required
                    onChange={this.handleChange}
                    value={this.state.username}
                  />
                  <Form.Input
                    icon='lock'
                    iconPosition='left'
                    type="password"
                    name="password"
                    required
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
            
                  <Button content='Login' primary />
                </Form>
              </Grid.Column>
            
              <Grid.Column horizontalalign='middle'>
                <h3 style={{
                  display: "flex",
                  justifyContent: "center"
                }}>Don't have an account?</h3>
                <Link to="/register">
                <Button content='Register' icon='signup' size='big' />
                </Link>
              </Grid.Column>
            </Grid>
            
            <Divider vertical>Or</Divider>
            </Segment>
            
      
    );
  }
}


export default withAsyncAction("auth", "login")(LoginForm);
