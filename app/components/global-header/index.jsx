/**
 * @module GlobalHeader
 * Contains the global header and navigation of the Instagram Admin interface
 */

import React from 'react';
import { Link } from 'react-router';

/** Component Styles */
import './style.scss';

class GlobalHeader extends React.Component {
  render() {
    return (
      <header className="global-header">
        <nav className="u-wrapper u-centered">
          <ul className="u-unstyled global-navigation" role="navigation">
            <li className="nav_item">
              <Link className="nav_link" data-item="logo" to="/">Instagram</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default GlobalHeader;
