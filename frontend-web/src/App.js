import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/reactotronConfig';

import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store';
import GlobaStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobaStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
