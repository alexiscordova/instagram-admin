// Vendor Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Base CSS Framework
import './styles/app.scss';

import routes from './router.jsx';

ReactDOM.render(routes, document.querySelector('#app'));
