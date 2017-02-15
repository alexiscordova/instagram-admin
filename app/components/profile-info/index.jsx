// Vendor Libraries
import React from 'react';

// Component Styles
import './style.scss';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let profileData = this.props.data;
    let isDataLoaded = profileData.id && typeof profileData.id !== 'undefined';

    if (isDataLoaded) {
      document.title = `${profileData.full_name} (@${profileData.username}) • Instagram photos and videos`;
    }

    return (
      <header className="profile-info">
        <div className="u-wrapper">
          <div className="profile_photo">
            <img className="u-round" src={profileData.profile_picture} alt={profileData.full_name} />
          </div>

          <div className="profile_content">
            <h1 className="profile_username">{profileData.username}</h1>

            <ul className="u-unstyled u-body-copy profile_stats">
              <li className="profile_posts">
                <span className="posts_total">{profileData.counts.media}</span> posts
              </li>
              <li className="profile_followers">
                <span className="followers_total">{profileData.counts.followed_by}</span> followers
              </li>
              <li className="profile_following">
                <span className="following_total">{profileData.counts.follows}</span> following
              </li>
            </ul>

            <div className="profile_bio">
              <p className="u-body-copy">
                <span className="profile_name u-inline-text u-headline-2">{profileData.full_name}</span> {profileData.bio} <a className="profile_link" href={profileData.website}>{profileData.website}</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

ProfileInfo.propTypes = {
  full_name: React.PropTypes.string,
  username: React.PropTypes.string,
  profile_picture: React.PropTypes.string,
  counts: React.PropTypes.objectOf(React.PropTypes.number),
  bio: React.PropTypes.string,
  website: React.PropTypes.string
};

export default ProfileInfo;
