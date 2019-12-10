import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction, connect } from "../HOCs";

class DeleteMessage extends Component {

    handleDeleteMessage = () => {
        const confrim = window.confirm("Click OK to delete post")

        if(confrim) {
            this.props.deleteMessage(this.props.id)
        }
    }

  render() {
    return (
      this.props.username === this.props.loggedInUser && (
        <button
          style={{
            background: "red",
            width: "100%",
            opacity: "80%"
          }}
          onClick={() => {
              this.handleDeleteMessage()
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
