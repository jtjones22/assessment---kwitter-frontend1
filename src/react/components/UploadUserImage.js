import React, { Component } from "react";
import { withAsyncAction } from "../HOCs"
import { Form } from "semantic-ui-react";


class UploadUserImage extends Component {

  handleSubmitUserImage = e => {
    e.preventDefault()
    this.props.putPicture(e.target)
  };

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSubmitUserImage}>
          <Form.Input 
            type="file" 
            name="picture" />
          <br></br>
          <Form.Input 
            type="submit" 
            value="Upload Profile Picture" />
        </Form>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users","putPicture")(UploadUserImage);
