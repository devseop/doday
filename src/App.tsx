import React from 'react';
import Router from './router';
import './App.css';
import { Provider } from 'react-redux';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <div className="box-border bg-bg">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
