import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const pleiqCodeReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'REQUEST_PARENT_ACTIVATE':
      return payload;
    case 'GENERATE_ERROR':
      return {
        errors: payload.errors
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  pleiq_code: pleiqCodeReducer,
  form: reduxFormReducer
});

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
