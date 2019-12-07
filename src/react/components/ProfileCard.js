import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { withAsyncAction } from "../HOCs"
import { Spinner } from '../components';
import DeleteUser from './DeleteUser'



  class ProfileCard extends React.Component {
    componentDidMount() {
      this.props.getUser(this.props.username);
    }
  
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.username !== prevProps.username) {
        this.props.getUser(this.props.username);
      }
    }
  

  render() {
    if(this.props.result === null) {
      return <Spinner name="circle" color="blue" />;
    }

    const user = this.props.result.user
  
    return (
      <Card>
        <Image
          src={user.pictureLocation 
          ? "https://kwitter-api.herokuapp.com" + user.pictureLocation : "https://icon-library.net/images/no-profile-picture-icon-female/no-profile-picture-icon-female-9.jpg" }
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header> {user.displayName} </Card.Header>
          <Card.Meta>
            <span className="date">
              Joined {new Date(user.createdAt).toDateString()}
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
        <DeleteUser username={this.props.username}/>
      </Card>
    );
  }
}
export default withAsyncAction("users", "getUser")(ProfileCard);

/*mapStateToProps
  loading
  error
  result

mapDispatchToProps
  getUser
*/

