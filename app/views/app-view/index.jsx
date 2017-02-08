// Vendor Libraries
import React from 'react';

// Import Components
import GlobalHeader from '../../components/global-header/index.jsx';
import GlobalFooter from '../../components/global-footer/index.jsx';

class Application extends React.Component {
  render() {
    return (
      <article className="react-root">
        <GlobalHeader />

        <main className="u-wrapper">
          { this.props.children }
        </main>

        <GlobalFooter />
      </article>
    );
  }
};

export default Application;
