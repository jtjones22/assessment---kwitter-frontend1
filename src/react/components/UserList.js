import React, { Component } from "react";
import { withAsyncAction } from "../HOCs";
import UserCard from "./UserCard";
import { Link } from ".";

class UserList extends Component {
    state = {
        filteredUsers: []
    }

  componentDidMount() {
    this.props.getUsers();
  }

  componentDidUpdate(prevProp) {
      if (prevProp.result !== this.props.result) {
          this.setState({filteredUsers: this.props.result.users})
      }
  }

  handleSearchUser = event => {
      const filterValues = event.target.value
      const newFilteredUsers = this.props.result.users.filter(user => {
          if(user.username.includes(filterValues)) {
              return true
          } else {
              return false
          }
        })
        this.setState({filteredUsers: newFilteredUsers})
  }

  render() {
    if (this.props.result === null) {
      return <p>Loading...</p>;
    }
    return (
      <>
        <div>
          <input
            style={{
              width: "100%"
            }}
            onChange={this.handleSearchUser}
            placeholder="Enter a username"
          ></input>
        </div>
        {this.props.result && this.state.filteredUsers.map(user => (
          <div
            style={{
              marginBottom: "15px"
            }}
          >
            <Link to={`/profile/${user.username}`}>
              <UserCard
                username={user.username}
                bio={user.about}
                profilePicture={user.pictureLocation}
                displayName={user.displayName}
              />
            </Link>
          </div>
        ))}
      </>
    );
  }
}

export default withAsyncAction("users", "getUsers")(UserList);
