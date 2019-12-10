import React from "react";
import { CreateMessageForm, GlobalMessageList, MenuBar } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {

    render() {
        return (
        <>
        <MenuBar isAuthenticated={this.props.isAuthenticated} />
        <h2>Message Feed</h2>
        <CreateMessageForm />
        <GlobalMessageList />
        </>
        )
    }
}

export default userIsAuthenticated(MessageFeed);