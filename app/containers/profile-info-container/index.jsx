// Vendor Libraries
import React from 'react';
import fetchJsonp from 'fetch-jsonp';

// Components
import ProfileInfo from '../../components/profile-info/index.jsx';

class ProfileInfoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        counts: {
          media: '',
          follows: '',
          followed_by: ''
        }
      }
    }
  }

  loadProfileInfo(token) {
    let url = `https://api.instagram.com/v1/users/self/?access_token=${token}`;

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

    this.loadProfileInfo(token);
  }

  render() {
    return (
      <ProfileInfo data={this.state.data} />
    );
  }
};

export default ProfileInfoContainer;
