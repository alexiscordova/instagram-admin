// Vendor Libraries
import React from 'react';

// Components
import LoginContainer from '../../containers/login-container/index.jsx';

class LoginView extends React.Component {
  render() {
    let classes = `content ${this.props.route.contentClass}`;

    return (
      <section className={ classes }>
        <LoginContainer />
      </section>
    );
  }
};

export default LoginView;
