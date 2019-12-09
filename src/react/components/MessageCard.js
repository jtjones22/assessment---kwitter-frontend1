import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Feed } from "semantic-ui-react";
import LikeButton from "./LikeButton";
import DeleteMessage from "./DeleteMessage";


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
              <a 
              style={{
                width: '30%'
              }}
              href={`/profile/${this.props.username}`}>
              <h4>{this.props.username}</h4>
              </a>
              <Feed.Date>
                {this.props.createdAt > 1
                  ? `${this.props.createdAt} hours`
                  : `${this.props.createdAt} hour`}{" "}
                ago
              </Feed.Date>
              <br></br>
              <span
                style={{
                  fontWeight: "lighter"
                }}
              >
                {this.props.text}
              </span>
            </Feed.Summary>
            <Feed.Meta>
              <LikeButton likes={this.props.likes} id={this.props.id} />
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
        <DeleteMessage id={this.props.id} username={this.props.username} />
      </Feed>
    );
  }
}

export default MessageCard;
