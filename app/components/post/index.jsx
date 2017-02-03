import React from 'react';

// Component styles
import './style.scss';

class Post extends React.Component {
  render() {
    return (
      <li className="post">
        <a className="post_link" href="#">
          <img className="post_img" src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
        </a>
      </li>
    );
  }
};

export default Post;
