import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed, Icon } from "semantic-ui-react";
import { connect } from "../HOCs";
import { toggleLike } from "../../redux/actionCreators";

class ToggleLikeButton extends Component {

  handleToggleLike = event => {
    this.props.toggleLike(this.props.id)
  };

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

const mapDispatchToProps = {
  toggleLike
};

export default connect(null, mapDispatchToProps)(ToggleLikeButton);
