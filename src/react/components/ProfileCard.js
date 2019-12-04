import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { withAsyncAction } from "../HOCs"


class ProfileCard extends Component {

  componentDidMount() {
    this.props.getUser(this.props.username)
  }

  render() {
    if(this.props.result === null) {
      return <p>Loading...</p>
    }

    const user = this.props.result.user
  
    return (
      <Card>
        <Image
          src={user.pictureLocation}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header> {user.displayName} </Card.Header>
          <Card.Meta>
            <span className="date">
              Joined in {new Date(user.createdAt).getFullYear()}
            </span>
          </Card.Meta>
          <Card.Description>
            {user.about ? (
              user.about
            ) :  (
              <React.Fragment>

              <span>You do not have a bio currently</span>
              <br></br>
              <a
              href="/"
                style={{
                  color: "lightgrey",
                  fontWeight: "lighter"
                }}
                >
                click here to update bio
              </a>
            </React.Fragment>
            )}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {user.username}
        </Card.Content>
      </Card>
    );
  }
}

export default withAsyncAction("users","getUser")(ProfileCard);
