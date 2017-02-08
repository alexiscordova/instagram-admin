// Vendor Libraries
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Import Components
import AppView from './views/app-view/index.jsx';
import ProfileView from './views/profile-view/index.jsx';

// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={AppView}>
      <Route path="/" component={ProfileView} />
      {/*<Route path="/posts" component={PostsView} />*/}
      {/*<Route path="/login" component={LoginView} />*/}
    </Route>
  </Router>
);

export default routes;