import React from 'react';

// Component Styles
import './style.scss';

class ProfileInfo extends React.Component {
  render() {
    return (
      <header className="profile-info">
        <div className="profile-photo">
          <img alt="" src="https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150" />
        </div>
        <div className="profile-content">
          <div className="profile-username">
            <h1>username</h1>
          </div>
          <div className="profile-stats">
            <ul className="unstyled">
              <li className="profile-posts">
                <span className="posts-total">##</span> posts
              </li>
              <li className="profile-followers">
                <span className="followers-total">##</span> followers
              </li>
              <li className="profile-following">
                <span className="following-total">##</span> following
              </li>
            </ul>
          </div>
          <div className="profile-bio">
            <span className="body-copy">
              <h3 className="profile-name inline-text">FirstName LastName</h3> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#">website.com</a>
            </span>
          </div>
        </div>
      </header>
    );
  }
};

export default ProfileInfo;
