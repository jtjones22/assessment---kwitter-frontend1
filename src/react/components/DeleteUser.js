import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction, connect } from "../HOCs";

class DeleteUser extends Component {

    handleDeleteUser = () => {
        const confrim = window.confirm()

        if(confrim) {
            this.props.deleteUser(this.props.id)
        }
    }

  render() {
    return (
      this.props.username === this.props.loggedInUser && (
        <button
          style={{
            background: "red"
          }}
          onClick={() => {
            this.handleDeleteUser();
          }}
        >
          Delete Account
        </button>
      )
    );
  }
}

const mapStateToProps = state => {
 return {
  loggedInUser: state.auth.login.result.username   
    }
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "deleteUser")(DeleteUser)
);
