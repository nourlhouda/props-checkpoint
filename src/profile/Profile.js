import React from "react";
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
      <div>
        <span>{props.fullName}</span>
      </div>
      <div>
        <span>{props.bio}</span>
      </div>
      <div>
        <span>{props.profession}</span>
      </div>
      <div>
        <span>{props.children}</span>
      </div>
      <div>{props.handleName}</div>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Foulen Elfouleni",
  bio: "bio text",
  profession: "profession",
  children: "Picture",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
