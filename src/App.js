import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './store/reducers';

import CurrencyContainer from './components';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )}>
    <CurrencyContainer />
  </Provider>
);

export default App;
