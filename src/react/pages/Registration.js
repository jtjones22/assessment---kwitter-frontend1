import React from "react";
import { RegisterForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Create your new account</h2>
        <RegisterForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);