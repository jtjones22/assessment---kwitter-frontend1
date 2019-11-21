import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";

const fakeUser = {
  pictureLocation: null,
  username: "jtjones22",
  displayName: "Jonathan Jones",
  about: "",
  googleId: null,
  createdAt: "2019-11-19T22:55:56.998Z",
  updatedAt: "2019-11-19T22:55:56.998Z"
};

class ProfileCard extends Component {
  render() {
    return (
      <Card>
        <Image
          src="http://cttengineering.com/wp-content/uploads/2014/04/profile-no-photo.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header> {fakeUser.displayName}</Card.Header>
          <Card.Meta>
            <span className="date">
              Joined in {new Date(fakeUser.createdAt).getFullYear()}
            </span>
          </Card.Meta>
          <Card.Description>
            {fakeUser.about ? (
              fakeUser.about
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
          {fakeUser.username}
        </Card.Content>
      </Card>
    );
  }
}

export default ProfileCard;
