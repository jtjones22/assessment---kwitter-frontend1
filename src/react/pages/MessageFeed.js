import React from "react";
import { Menu, GlobalMessageFeed } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {

    render() {
        return (
        <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <GlobalMessageFeed />
        </>
        )
    }
}

export default userIsAuthenticated(MessageFeed);