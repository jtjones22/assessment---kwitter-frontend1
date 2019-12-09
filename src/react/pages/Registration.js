import React from "react";
import { RegisterForm, Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <RegisterForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);