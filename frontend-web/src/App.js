import React from 'react';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import history from './services/history';
import Routes from './routes';

import GlobaStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobaStyle />
    </Router>
  );
}

export default App;
