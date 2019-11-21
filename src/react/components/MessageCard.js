import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed, Icon } from "semantic-ui-react";

class MessageCard extends Component {
  render() {
    return (
      <Feed
        style={{
          background: "lightgrey",
          padding: "10px",
          border: "1px solid darkgrey",
          borderRadius: "5%"
        }}
      >
        <Feed.Event>
          <Feed.Label>
            <img
              style={{
                border: "1px solid black"
              }}
              alt="not loading"
              src="http://cttengineering.com/wp-content/uploads/2014/04/profile-no-photo.png"
            />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary>
              <Feed.User>{this.props.displayName}</Feed.User>
              <Feed.Date>1 Hour Ago</Feed.Date>
              <br></br>
              <span style={{
                  fontWeight: 'lighter'
              }}>{this.props.text}</span>
            </Feed.Summary>
            <Feed.Meta>
              <Feed.Like>
                <Icon name="like" />
                {this.props.likes.length}
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}

export default MessageCard;
