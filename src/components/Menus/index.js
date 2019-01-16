import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classnames from 'classnames';
import { NavItem, NavMenus } from './../NavBar';

const Menus = props => {
  const navigateTo = path => {
    props.history.push(path);
  };
  console.log(props.location.pathname.indexOf('/trending') > -1);
  return (
    <NavMenus>
      <NavItem
        onClick={navigateTo.bind(this, '/home')}
        className={classnames({
          selected: props.location.pathname.indexOf('/home') > -1,
        })}
      >
        Home
      </NavItem>
      <NavItem
        onClick={navigateTo.bind(this, '/trending')}
        className={classnames({
          selected: props.location.pathname.indexOf('/trending') > -1,
        })}
      >
        Trending
      </NavItem>
      <NavItem
        onClick={navigateTo.bind(this, '/random')}
        className={classnames({
          selected: props.location.pathname.indexOf('/random') > -1,
        })}
      >
        Random
      </NavItem>
    </NavMenus>
  );
};

export default withRouter(Menus);
