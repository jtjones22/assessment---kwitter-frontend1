import React, { Component } from "react";
import MessageCard from "./MessageCard";
import { withAsyncAction } from "../HOCs"

class GlobalMessageFeed extends Component {

  componentDidMount() {
    this.props.getGlobalMessages()
  }
  render() {

    if(this.props.result === null) {
      return <p>Loading...</p>
    }

    const userMessages = this.props.result.messages

    return userMessages.map(message => (
      <MessageCard
        key={message.id}
        id={message.id}
        text={message.text}
        username={message.username}
        likes={message.likes}
        createdAt={new Date().getHours() - new Date(message.createdAt).getHours()}
      />
    ));
  }
}

export default withAsyncAction("messages","getGlobalMessages")(GlobalMessageFeed);
