import React from 'react';
import AppTitle from './AppTitle';
import { NavItem, NavMenus } from './NavBar';
import HomeContainer from '../containers/HomeContainer';

const App = () => {
  return (
    <div>
      {/* Title of the app */}
      <AppTitle />

      {/* Nav section */}
      <NavMenus>
        <NavItem>Home</NavItem>
        <NavItem>Trending</NavItem>
        <NavItem>Random</NavItem>
      </NavMenus>

      {/* Home Container */}
      <HomeContainer />
    </div>
  );
};

export default App;
