// Vendor Libraries
import React from 'react';
import ProfileInfo from '../profile-info/index.jsx';

// Component Styles
import './style.scss';

class MainContent extends React.Component {
  render() {
    return (
      <main className="u-wrapper">
        <section className="content">
          {/* Profile */}
          <ProfileInfo />

          {/* Posts */}
          <section className="posts">
            <header className="inline">
              <h2>Posts</h2>
              <span>
                <a href="#">Download all…</a>
              </span>
            </header>
            <ul className="unstyled post-items">
              <li className="post">
                <a href="#">
                  <img src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
                </a>
              </li>
              <li className="post">
                <a href="#">
                  <img src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
                </a>
              </li>
              <li className="post">
                <a href="#">
                  <img src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
                </a>
              </li>
              <li className="post">
                <a href="#">
                  <img src="https://placeholdit.imgix.net/~text?txtsize=23&txt=200%C3%97200&w=200&h=200" />
                </a>
              </li>
            </ul>
            <span className="layout-right">
              <a href="#">See more…</a>
            </span>
          </section>

        </section>
      </main>
    )
  }
};

export default MainContent;
