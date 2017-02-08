// Vendor Libraries
import React from 'react';

// Component styles
import './style.scss';

class MoreContent extends React.Component {
  render() {
    return (
      <span className="more_content">
        <a className="more_link" href="#">{ this.props.text }</a>
      </span>
    );
  }
};

MoreContent.propTypes = {
  text: React.PropTypes.string
};

MoreContent.defaultProps = {
  text: 'See more'
};

export default MoreContent;
