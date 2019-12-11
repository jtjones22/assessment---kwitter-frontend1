import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { connect } from "../HOCs"
import Bio from './Bio'


class UserCard extends React.Component {
    render() {
        return (
            <>
            <Card>
              <Image
                src={this.props.profilePicture
                ? "https://kwitter-api.herokuapp.com" + this.props.profilePicture : "https://icon-library.net/images/no-profile-picture-icon-female/no-profile-picture-icon-female-9.jpg" }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header> {this.props.displayName} </Card.Header>
                <Card.Description>
                  <Bio 
                  bio={this.props.bio}
                  username={this.props.username}
                  loggedInUser={this.props.loggedInUser}
                  page={this.props.page}
                  />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Icon name="user" />
                {this.props.username}
              </Card.Content>
            </Card>
            </>
        )
    }
}


const mapStateToProps = state => {
    return {
              loggedInUser: state.auth.login.result.username,
          page: state.router.location.pathname
    }
  }
  
  

export default connect(mapStateToProps)(UserCard)