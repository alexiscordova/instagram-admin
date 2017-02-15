// Vendor Libraries
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

// Container Styles
import './style.scss';

// Components
import Post from '../../components/post/index.jsx';

class PostsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  loadAllPostData(token) {
    let endpoint = (this.props.endpoint === 'media') ? 'media/recent' : 'media/liked';
    let url = `https://api.instagram.com/v1/users/self/${endpoint}/?access_token=${token}&count=12`;

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

    this.loadAllPostData(token);
  }

  render() {
    return (
      <div className="posts-container">
        <ul className="u-unstyled post_grid">
          {this.state.data.map((postData) => {
            return <Post data={postData} key={postData.id} />
          })}
        </ul>
      </div>
    );
  }
};

export default PostsContainer;
