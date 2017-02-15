import React from 'react';

// Component styles
import './style.scss';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let postData = this.props.data;
    let classNames = (postData.type === 'video') ? 'post video' : 'post';

    return (
      <li className={classNames} id={postData.id}>
        <a className="post_link" href={postData.link}>
          <img className="post_img u-resp" src={postData.images.standard_resolution.url} />
        </a>
      </li>
    );
  }
};

export default Post;
