import React from 'react';

// Component styles
import './style.scss';

class Posts extends React.Component {
  render() {
    return (
      <section className="posts">
        <header className="u-inline">
          <h2 className="post_title">Posts</h2>
          <span>
            <a className="u-small-text" href="#">Download all…</a>
          </span>
        </header>
        <ul className="u-unstyled post_items">
          <li className="post">
            <a className="post_link" href="#">
              <img className="post_img" src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
            </a>
          </li>
          <li className="post">
            <a className="post_link" href="#">
              <img className="post_img" src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
            </a>
          </li>
          <li className="post">
            <a className="post_link" href="#">
              <img className="post_img" src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
            </a>
          </li>
          <li className="post">
            <a className="post_link" href="#">
              <img className="post_img" src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
            </a>
          </li>
        </ul>
        <span className="more_content">
          <a className="more_link" href="#">See more</a>
        </span>
      </section>
    )
  }
};

export default Posts;
