import React from "react";
import { Menu, ProfileCard, MessageFeed } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            justifyItems: "center"
          }}
        >
          <div style={{}}>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Profile
            </h2>
            <ProfileCard />
          </div>
          <div
            style={{
              paddingTop: "30px",
              width: "80%"
            }}
          >
            <MessageFeed />
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
