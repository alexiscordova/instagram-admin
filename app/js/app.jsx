// Vendor Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Sass import (FPO)
import '../styles/app.scss';

// React components start with a capital letter
function Application() {
  return (
    <h1>Hello, World!</h1>
  );
}

ReactDOM.render(<Application />, document.querySelector('#app'));
