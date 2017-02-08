// Vendor Libraries
import React from 'react';

// Component Styles
import './style.scss';

class ProfileInfo extends React.Component {
  componentDidMount() {
    document.title = '{name} {@username} • Instagram photos and videos';
  }

  render() {
    return (
      <header className="profile-info">
        <div className="u-wrapper">
          <div className="profile_photo">
            <img className="u-round" src="https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150" alt="Lorem ipsum" />
          </div>

          <div className="profile_content">
            <h1 className="profile_username">username</h1>

            <ul className="u-unstyled u-body-copy profile_stats">
              <li className="profile_posts">
                <span className="posts_total">##</span> posts
              </li>
              <li className="profile_followers">
                <span className="followers_total">##</span> followers
              </li>
              <li className="profile_following">
                <span className="following_total">##</span> following
              </li>
            </ul>

            <div className="profile_bio">
              <p className="u-body-copy">
                <span className="profile_name u-inline-text u-headline-2">FirstName LastName</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a className="profile_link" href="#">website.com</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default ProfileInfo;
