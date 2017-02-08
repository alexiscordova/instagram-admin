// Vendor Libraries
import React from 'react';
import { Link } from 'react-router';

// Component styles
import './style.scss';

class MoreContent extends React.Component {
  render() {
    return (
      <span className="more_content">
        <Link className="more_link" to={ this.props.path }>{ this.props.text }</Link>
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
