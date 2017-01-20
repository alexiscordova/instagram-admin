// Vendor Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Base CSS Framework
import '../styles/app.scss';

// Base Application Structure
function Application() {
  return (
    <h1>Hello, World!</h1>
  );
}

ReactDOM.render(<Application />, document.querySelector('#app'));
