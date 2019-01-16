import React from 'react';
import AppTitle from './AppTitle';
import Routes from './../routes';

const App = () => {
  return (
    <div>
      {/* Title of the app */}
      <AppTitle />
      {/* Home Container */}

      <Routes />
    </div>
  );
};

export default App;
