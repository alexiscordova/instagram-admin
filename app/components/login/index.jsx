// Vendor Libraries
import React from 'react';

// Component styles
import './style.scss';

class Login extends React.Component {
  launchLogin() {
    const clientId = '446532278e7344029320dbfd5001e490';
    const redirectUri = 'http://localhost:8080';
    const url = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

    window.open(url, '_self');
  }

  render() {
    return (
      <div className="login u-centered">
        <button className="login_button" onClick={this.launchLogin}>Sign in with Instagram</button>
      </div>
    );
  }
};

export default Login;
