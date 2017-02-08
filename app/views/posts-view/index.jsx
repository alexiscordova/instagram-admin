// Vendor Libraries
import React from 'react';

// Components
import ProfileInfoContainer from '../../containers/profile-info-container/index.jsx';
import PostsContainer from '../../containers/posts-container/index.jsx';

class PostsView extends React.Component {
  render() {
    return (
      <section className="content">
        <ProfileInfoContainer />
        <PostsContainer />
      </section>
    );
  }
};

export default PostsView;
