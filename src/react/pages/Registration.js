import React from "react";
import { RegisterForm, MenuBar } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
  
        <MenuBar />
        <RegisterForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);