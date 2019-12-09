import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction } from "../HOCs";
// import { ProfileCard } from ".";


class UpdateUser extends Component {

    componentDidMount() {
        this.props.getUser(this.props.username)
      }

    render() {
        return (
            <h3>hello</h3>
        )
    }
}

export default withAsyncAction("users","getUser")(UpdateUser)