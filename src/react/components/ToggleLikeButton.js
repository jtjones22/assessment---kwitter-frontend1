import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed, Icon } from "semantic-ui-react";
import { withAsyncAction } from "../HOCs";

class ToggleLikeButton extends Component {
  handleToggleLike = event => 
  this.props.


    // const likes = this.props.likes.map(user => (
    //   user.username
    // ))
    // console.log(likes)
    // console.log(user)
    this.props.addLike(this.state)

  };

  render() {


    return (
      <React.Fragment>
        <Feed.Like>
          <Icon onClick={() => this.toggleLike()} name="like" />
        </Feed.Like>
        {this.props.likes.length}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("likes", "addlike")(ToggleLikeButton);
