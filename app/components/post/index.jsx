import React from 'react';

// Component styles
import './style.scss';

class Post extends React.Component {
  render() {
    return (
      <li className="post">
        <a className="post_link" href="#">
          <img className="post_img u-resp" src="https://placeholdit.imgix.net/~text?txtsize=88&txt=IMG&w=350&h=350&txttrack=0" />
        </a>
      </li>
    );
  }
};

export default Post;
