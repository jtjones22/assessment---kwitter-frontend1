import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction, connect } from "../HOCs";
import { Button } from "semantic-ui-react";

class DeleteUser extends Component {

    handleDeleteUser = () => {
        const confrim = window.confirm("Click OK to remove your account.")

        if(confrim) {
            this.props.deleteUser(this.props.id)
        }
    }

  render() {
    return (
      this.props.username === this.props.loggedInUser &&
        this.props.page === `/profile/${this.props.loggedInUser}` && (
        <Button
          style={{
            background: "red"
          }}
          onClick={() => {
            this.handleDeleteUser();
          }}
        >
          Delete My Kwitter
        </Button>
      )
    );
  }
}

const mapStateToProps = state => {
 return {
  loggedInUser: state.auth.login.result.username,
  page: state.router.location.pathname
    }
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "deleteUser")(DeleteUser)
);