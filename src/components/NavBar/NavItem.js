import React from 'react';
import './NavBar.css';

const NavItem = props => {
  return <div className="nav-item-wrapper">{props.children}</div>;
};

export default NavItem;
