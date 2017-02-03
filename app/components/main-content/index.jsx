// Vendor Libraries
import React from 'react';
import ProfileInfo from '../profile-info/index.jsx';
import Posts from '../posts/index.jsx';

// Component Styles
import './style.scss';

class MainContent extends React.Component {
  render() {
    return (
      <main className="u-wrapper">
        <section className="content">
          <ProfileInfo />
          <Posts />
          <Posts title="Liked" />
        </section>
      </main>
    )
  }
};

export default MainContent;
