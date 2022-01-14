import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/configureStore'

import {Provider} from 'react-redux'

const Root =  () => (
  <Provider store={store}>
  <App />
</Provider>
)

export default Root