// Vendor Libraries
import React from 'react';

// Container Styles
import './style.scss';

// Components
import Post from '../../components/post/index.jsx';

class PostsContainer extends React.Component {
  render() {
    return (
      <div className="post-container">
        <ul className="u-unstyled post_grid">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ul>
      </div>
    );
  }
};

export default PostsContainer;
