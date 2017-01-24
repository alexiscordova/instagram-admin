import React from 'react';

// Component Styles
import './style.scss';

class GlobalHeader extends React.Component{
  render() {
    return (
      <header className="global-header">
        <div className="wrapper">
          <div className="logo">
            <a href="/">Instagram</a>
          </div>
          <ul role="navigation">
            <li>
              <a className="profile" href="/">Profile</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
};

export default GlobalHeader;
