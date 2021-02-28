import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import rootReducer from "./rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
