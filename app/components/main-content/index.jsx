// Vendor Libraries
import React from 'react';

// Component Styles
import './style.scss';

class MainContent extends React.Component {
  render() {
    return (
      <main className="wrapper">
        <section className="content">
          <header className="profile">
            <div className="profile-photo">
              <img alt="" src="https://placeholdit.imgix.net/~text?txtsize=14&txt=150%C3%97150&w=150&h=150" />
            </div>
            <div className="profile-content">
              <div className="profile-username">
                <h1>username</h1>
              </div>
              <div className="profile-stats">
                <ul className="unstyled">
                  <li className="profile-posts">
                    <span className="posts-total">##</span> posts
                  </li>
                  <li className="profile-followers">
                    <span className="followers-total">##</span> followers
                  </li>
                  <li className="profile-following">
                    <span className="following-total">##</span> following
                  </li>
                </ul>
              </div>
              <div className="profile-bio">
                <span className="body-copy">
                  <h2 className="profile-name inline">FirstName LastName</h2> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#">website.com</a>
                </span>
              </div>
            </div>
          </header>
          <div>
            <h1>photos and other shit</h1>
          </div>
        </section>
      </main>
    )
  }
};

export default MainContent;
