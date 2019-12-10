import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { withAsyncAction } from "../HOCs";
import { Spinner } from '../components';
import UpdateUserForm from "./UpdateUserForm";
import UploadUserImage from "./UploadUserImage";



class UpdateUser extends Component {

    componentDidMount() {
        this.props.getUser(this.props.username)
      }

    render() {
        if(this.props.result === null) {
            return <Spinner name="circle" color="blue" />;
          }
        return (
            <React.Fragment>
                <UpdateUserForm
                username={this.props.result.user.username}
                bio={this.props.result.user.about}
                displayName={this.props.result.user.displayName}/>
                <UploadUserImage />
            </React.Fragment>
        )
    }
}

export default withAsyncAction("users","getUser")(UpdateUser)