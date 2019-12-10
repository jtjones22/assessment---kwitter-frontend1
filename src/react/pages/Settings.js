import React from "react";
import { MenuBar, UpdateUser } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Settings extends React.Component {
  render() {
    return (
      <>
        <MenuBar />
        <h2>Settings</h2>
        <UpdateUser username={this.props.match.params.username}/>
      </>
    );
  }
}

export default userIsAuthenticated(Settings);