// Vendor Libraries
import React from 'react';
import ProfileInfoContainer from '../../containers/profile-info-container/index.jsx';
import ProfilePostsContainer from '../../containers/profile-posts-container/index.jsx';

class ProfileView extends React.Component {
  render() {
    return (
      <section className="content">
        <ProfileInfoContainer />
        <ProfilePostsContainer />
        <ProfilePostsContainer title="Liked" path="/liked" />
      </section>
    )
  }
};

export default ProfileView;
