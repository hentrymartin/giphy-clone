import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import Menus from './components/Menus';
import TrendingContainer from './containers/TrendingContainer';
import RandomContainer from './containers/RandomContainer';
import GIFDetailsContainer from './containers/GIFDetailsContainer';

const Routes = props => {
  return (
    <div>
      <Router>
        <div>
          <Menus />
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path="/trending" component={TrendingContainer} />
            <Route path="/random" component={RandomContainer} />
            <Route path="/details/:id" component={GIFDetailsContainer} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
