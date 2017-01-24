// Vendor Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Base CSS Framework
import './styles/app.scss';

// Import Components
import GlobalHeader from './components/global-header/index.jsx';
import GlobalFooter from './components/global-footer/index.jsx';

// Base Application Structure
function Application() {
  return (
    <section className="react-root">
      <GlobalHeader />
      <main className="wrapper">
        <h1>Hello, World!</h1>
      </main>
      <GlobalFooter />
    </section>
  );
}

ReactDOM.render(<Application />, document.querySelector('#app'));
