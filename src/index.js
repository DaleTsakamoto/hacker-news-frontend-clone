import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import configureStore from './store'
import './index.css';
import App from './App';

// const store = configureStore();

//Add store maybe later store={store}
function Root() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    // </Provider>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
