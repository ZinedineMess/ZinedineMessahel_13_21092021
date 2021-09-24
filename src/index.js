import App from 'router/App';
import 'index.css';
import { Provider } from 'react-redux';
import store from 'utils/reducers/store';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
