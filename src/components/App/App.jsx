import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import './App.css';
import TodoList from '../TodoList';
import Counter from '../Counter';
import Watcher from '../Watcher';

function App({ store }) {
  return (
    <Provider store={store}>
      <div className="app">
        <div className="app__watcher">
          <div className="watcher watcher_unicorn"></div>
          <Watcher being="unicorn" />
        </div>

        <div className="app__content">
          <TodoList />
          <Counter />
        </div>
      </div>
    </Provider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
