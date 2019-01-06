import React from 'react';
import PropTypes from 'prop-types';

const Avatar = props => {
  return <img {...props} />;
};

Avatar.defaultProps = {
  src: '',
  alt: '',
  onClick: () => {},
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};

export default Avatar;
