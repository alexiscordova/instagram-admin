// Vendor Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Import Components
import AppView from './views/app-view/index.jsx';
import ProfileView from './views/profile-view/index.jsx';
import PostsView from './views/posts-view/index.jsx';
import LoginView from './views/login-view/index.jsx';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={AppView}>
      <Route path="/" component={ProfileView} />
      <Route path="/posts" component={PostsView} />
      <Route path="/liked" component={PostsView} />
      {/*<Route path="/login" component={LoginView} />*/}
    </Route>
  </Router>
);

export default routes;
