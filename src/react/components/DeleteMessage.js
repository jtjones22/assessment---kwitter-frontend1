import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction, connect } from "../HOCs";

class DeleteMessage extends Component {
  render() {
    return (
      this.props.username === this.props.loggedInUser && (
        <button
          style={{
            background: "red",
            width: "100%",
            opacity: "50%"
          }}
          onClick={() => {
            this.props.deleteMessage(this.props.id);
          }}
        >
          Delete Message
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
  withAsyncAction("messages", "deleteMessage")(DeleteMessage)
);
