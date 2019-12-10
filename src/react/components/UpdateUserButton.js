import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "../HOCs";
import { Link } from ".";
import { Button } from "semantic-ui-react";

class UpdateUserButton extends Component {
  render() {
    return (
      this.props.username === this.props.loggedInUser && 
      this.props.page === `/profile/${this.props.loggedInUser}` && (
        <Link to={`/settings/${this.props.loggedInUser}`}>
          <Button
            style={{
              background: "blue",
              color: "white",
              width: "100%"
            }}
          >
            Update Account
          </Button>
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
