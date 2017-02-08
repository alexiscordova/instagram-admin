// Vendor Libraries
import React from 'react';
import ProfileInfoContainer from '../../containers/profile-info-container/index.jsx';
import ProfilePostsContainer from '../../containers/profile-posts-container/index.jsx';

// Component Styles
import './style.scss';

class ProfileView extends React.Component {
  render() {
    return (
      <section className="content">
        <ProfileInfoContainer />
        <ProfilePostsContainer />
        <ProfilePostsContainer title="Liked" />
      </section>
    )
  }
};

export default ProfileView;
