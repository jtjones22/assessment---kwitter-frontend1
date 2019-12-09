import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <Link to="/">
        <h1 style={{
          color: "black"
        }}>Kwitter</h1>
        </Link>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <Link to="/messagefeed">Message Feed</Link>
            <Link to="/">Profile</Link>
            <Link to="/" onClick={this.handleLogout}>
              Logout
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(Menu)
