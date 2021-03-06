import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Card, Icon, Image } from "semantic-ui-react";
import { withAsyncAction, connect } from "../HOCs"
import { Spinner } from '../components';
import DeleteUser from './DeleteUser'
import UpdateUserButton from './UpdateUserButton'
import Bio from './Bio'




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
            <Bio 
            bio={user.about}
            username={this.props.username}
            loggedInUser={this.props.loggedInUser}
            page={this.props.page}
            />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          {user.username}
        </Card.Content>
        <UpdateUserButton username={this.props.username}/>
        <DeleteUser username={this.props.username}/>
      </Card>
    );
  }
}

/*mapStateToProps
  loading
  error
  result

mapDispatchToProps
  getUser
*/

const mapStateToProps = state => {
  return {
            loggedInUser: state.auth.login.result.username,
        page: state.router.location.pathname
  }
}


export default connect(mapStateToProps)(
  withAsyncAction("users", "getUser")(ProfileCard)
);
