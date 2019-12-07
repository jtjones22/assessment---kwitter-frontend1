import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction, connect } from "../HOCs";
import { Link } from ".";

class UpdateUserButton extends Component {
  render() {
    return (
      this.props.username === this.props.loggedInUser && 
      this.props.page === `/profile/${this.props.loggedInUser}` && (
        <Link to={`/settings/${this.props.loggedInUser}`}>
          <button
            style={{
              background: "blue",
              color: "white",
              width: "100%"
            }}
          >
            Update Account
          </button>
        </Link>
      )
    );
  }
}

const mapStateToProps = state => {
    return {
        loggedInUser: state.auth.login.result.username,
        page: state.router.location.pathname
    }
}

export default connect(mapStateToProps)(UpdateUserButton);
