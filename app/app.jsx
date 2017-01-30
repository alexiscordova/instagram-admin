// Vendor Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Base CSS Framework
import './styles/app.scss';

// Import Components
import GlobalHeader from './components/global-header/index.jsx';
import GlobalFooter from './components/global-footer/index.jsx';

// Base Application Structure
export default class Application extends React.Component {
  render() {
    return (
    )
  }
};

ReactDOM.render(<Application />, document.querySelector('#app'));
