import React from "react";
import { Link } from ".";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";
import { Menu, MenuItem } from "semantic-ui-react";

class MenuBar extends React.Component {
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
          <Menu id="menu-links">
            <MenuItem 
              as={Link} 
              to="/messagefeed" 
              name="Kweet Feed">
            </MenuItem>
            <MenuItem 
              as={Link} 
              to="/" 
              name="Profile">
            </MenuItem>
            <MenuItem 
              as={Link} 
              to="/" 
              onClick={this.handleLogout} name="Logout">
            </MenuItem>
          </Menu>
        )}
      </div>
    );
  }
}

export default withAsyncAction("auth", "logout")(MenuBar)
