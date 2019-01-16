import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './NavBar.css';

const NavItem = props => {
  return (
    <div className={classnames('nav-item-wrapper', props.className)} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

NavItem.defaultProps = {
  onClick: () => {},
  className: '',
};

NavItem.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default NavItem;
