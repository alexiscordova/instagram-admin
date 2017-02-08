import React from 'react';
import Post from '../../components/post/index.jsx';
import MoreContent from '../../components/more-content/index.jsx';

// Component styles
import './style.scss';

class Posts extends React.Component {
  render() {
    return (
      <section className="posts">
        <header className="u-inline">
          <h2 className="post_title">{ this.props.title }</h2>
          <span>
            <a className="u-small-text" href="#">Download all…</a>
          </span>
        </header>
        <ul className="u-unstyled post_items">
          <Post />
          <Post />
          <Post />
          <Post />
        </ul>
        <MoreContent path={ this.props.path }/>
      </section>
    )
  }
};

Posts.propTypes = {
  title: React.PropTypes.string,
  path: React.PropTypes.string
};

Posts.defaultProps = {
  title: 'Posts',
  path: '/posts'
};

export default Posts;
