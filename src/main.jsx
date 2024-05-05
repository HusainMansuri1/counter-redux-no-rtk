import React from 'react'
import ReactDOM from 'react-dom/client'
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App.jsx';
import allReducers from './redux/reducers';
import './index.css';

const store = legacy_createStore(allReducers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

export default store; 