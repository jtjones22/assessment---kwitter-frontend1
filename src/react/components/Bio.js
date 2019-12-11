import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "../components";

class Bio extends React.Component {
  render() {
    if (this.props.bio) {
      return <span style={{
          color: 'black'
      }}>{this.props.bio}</span>
    } else if (
      this.props.username === this.props.loggedInUser &&
      this.props.page === `/profile/${this.props.loggedInUser}`
    ) {
      return (
        <React.Fragment>
          <span>You do not have a bio currently</span>
          <br></br>
          <Link to={`/settings/${this.props.loggedInUser}`}>
            click here to update bio
          </Link>
        </React.Fragment>
      );
    } else {
      return <h5 style={{ color: "darkGrey", fontWeight:'lighter' }}>This user does not have a bio</h5>;
    }
  }
}

export default Bio;
