import React from "react";
import { MenuBar, UserList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <div style={{
          background: 'lightgrey'
      }}>
        <MenuBar isAuthenticated={this.props.isAuthenticated} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            justifyItems: "center",
            marginBottom: '10px'
          }}
        >
          <UserList />
        </div>
      </div>
    );
  }
}

export default userIsAuthenticated(Profile);
