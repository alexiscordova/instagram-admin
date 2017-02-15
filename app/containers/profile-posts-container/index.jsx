// Vendor Libraries
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

// Components
import Post from '../../components/post/index.jsx';
import MoreContent from '../../components/more-content/index.jsx';

// Component styles
import './style.scss';

class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  loadPostsData(token) {
    let endpoint = (this.props.endpoint === 'media') ? 'media/recent' : 'media/liked';
    let url = `https://api.instagram.com/v1/users/self/${endpoint}/?access_token=${token}&count=4`;

    fetchJsonp(url).then((response) => {
      return response.json();
    }).then((data) => {
      if (data.meta.code === 200) {
        this.setState({
          data: data.data
        });
      }
    });
  }

  componentWillMount() {
    let token = JSON.parse(window.localStorage.token).key;

    this.loadPostsData(token);
  }

  render() {
    return (
      <section className="posts">
        <header className="u-inline">
          <h2 className="post_title">{ this.props.title }</h2>
          {/*}<span>
            <a className="u-small-text" href="#">Download all…</a>
          </span>*/}
        </header>
        <ul className="u-unstyled post_items">
          {this.state.data.map((postData) => {
            return <Post data={postData} key={postData.id} />
          })}
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
