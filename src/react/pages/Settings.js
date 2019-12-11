import React from "react";
import { MenuBar, UpdateUser } from "../components";
import { userIsAuthenticated, connect } from "../HOCs";
import { Link } from "../components";

class Settings extends React.Component {
  render() {
    if(this.props.page === `/settings/${this.props.loggedInUser}`) {
      return (
        <>
          <MenuBar />
          <h2>Settings</h2>
          <UpdateUser username={this.props.match.params.username}/>
        </>
      );
    } else {
      return (
        <>
        <p>no no no this is not your account!</p>
        <Link to={`/settings/${this.props.loggedInUser}`}>Go to your settings page</Link>
      </>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
      loggedInUser: state.auth.login.result.username,
      page: state.router.location.pathname

  }
}

const mapDispatchToProps = {
  userIsAuthenticated
};


export default connect(mapStateToProps, mapDispatchToProps)(Settings);