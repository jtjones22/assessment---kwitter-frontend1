import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed, Icon } from "semantic-ui-react";

class LikeButton extends Component {
    state = {
        messageId: ""
    }


    toggleLike = () => {
    
        this.setState({
          messageId: this.props.id
        })
        console.log(this.state)
      }
    render () {
        return (
            <Feed.Like>
                    <Icon onClick= { () => this.toggleLike(this.props.id)}name="like"/>
            </Feed.Like>
        )}
};

export default LikeButton;