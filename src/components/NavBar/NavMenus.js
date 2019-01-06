import React from 'react';
import './NavBar.css';

const NavMenus = props => {
  return <div className="nav-menus-wrapper">{props.children}</div>;
};

export default NavMenus;
