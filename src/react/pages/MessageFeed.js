import React from "react";
import { Menu, GlobalMessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {

    render() {
        return (
        <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <GlobalMessageList />
        </>
        )
    }
}

export default userIsAuthenticated(MessageFeed);