// Vendor Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Import Components
import AppView from './views/app-view/index.jsx';
import ProfileView from './views/profile-view/index.jsx';
import PostsView from './views/posts-view/index.jsx';
import LoginView from './views/login-view/index.jsx';

function isLoggedIn() {
  // TODO probably replace this mess with some Redux magic, you buffoon

  // check if token is in url
  if (window.location.hash.length) {
    let token = window.location.hash.split('=')[1],
      storageData = {
        key: token,
        expiration: new Date().getTime() + 60480000
      };

    // Set token data in localStorage
    window.localStorage.setItem('token', JSON.stringify(storageData));

    // Remove window.location.hash from URL
    history.pushState('', document.title, window.location.pathname + window.location.search);

    // Return
    return true;
  } else if (typeof window.localStorage.token !== 'undefined') {
    let tokenExpirationTime = JSON.parse(window.localStorage.token).expiration,
      currentTime = new Date().getTime();

    // Check if token in localStorage is still valid
    return (tokenExpirationTime > currentTime) ? false : true
  } else {
    return false;
  }
}

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login'
    });
  }
}

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={AppView}>
      <Route path="/" component={ProfileView} onEnter={requireAuth} />
      <Route path="/posts" component={PostsView} onEnter={requireAuth} />
      {/*}<Route path="/liked" component={PostsView} onEnter={requireAuth} />*/}
      <Route path="/login" component={LoginView} contentClass="u-centered" />
      <Route path="*" component={ProfileView} onEnter={requireAuth} />
    </Route>
  </Router>
);

export default routes;
