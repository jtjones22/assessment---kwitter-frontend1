import React, { Component } from "react";
import { withAsyncAction } from "../HOCs"


class UploadUserImage extends Component {

  handleSubmitUserImage = e => {
    e.preventDefault()
    this.props.putPicture(e.target)
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmitUserImage}>
          <input type="file" name="picture" />
          <br></br>
          <input 
          type="submit" 
          value="Upload Profile Picture" />
        </form>
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users","putPicture")(UploadUserImage);
