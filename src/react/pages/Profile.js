import React from "react";
import { Menu, ProfileCard, MessageList } from "../components";
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
          <div>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Profile
            </h2>
            <ProfileCard username={this.props.match.params.username}/>
          </div>
          <div
            style={{
              paddingTop: "30px",
              width: "80%"
            }}
          >
            <MessageList username={this.props.match.params.username}/>
          </div>
        </div>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
