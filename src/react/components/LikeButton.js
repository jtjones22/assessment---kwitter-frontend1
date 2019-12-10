import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed, Icon } from "semantic-ui-react";
import { withAsyncAction } from "../HOCs";

class ToggleLikeButton extends Component {
  state = {
    messageId: this.props.id
  }

  handleToggleLike = () => {
      this.props.postLike(this.state)
  }

  render() {


    return (
      <React.Fragment>
        <Feed.Like>
          <Icon onClick={this.handleToggleLike} name="like" />
        </Feed.Like>
        {this.props.likes.length}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("likes", "postLike")(ToggleLikeButton);
