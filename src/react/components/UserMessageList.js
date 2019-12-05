import React, { Component } from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs";
class UserMessageList extends Component {
  componentDidMount() {
    this.props.getUserMessages(this.props.username);
  }

  componentDidUpdate(prevProp) {
    if (this.props.username !== prevProp.username) {
      this.props.getUserMessages(this.props.username);
    }
  }

  render() {
    if (this.props.result === null) {
      return <p>Loading...</p>;
    }

    return this.props.result.messages.map(message => (
      <MessageCard
        key={message.id}
        id={message.id}
        text={message.text}
        username={message.username}
        likes={message.likes}
        createdAt={
          new Date().getHours() - new Date(message.createdAt).getHours()
        }
      />
    ));
  }
}

export default withAsyncAction("messages", "getUserMessages")(UserMessageList);
