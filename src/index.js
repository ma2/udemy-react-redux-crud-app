import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

// ストアの作成（全stateの管理の責務を持つ）
const store = createStore(reducer);

// AppコンポーネントをProviderでラップして、ストアを渡す
// こうすることで全コンポーネントでストアが使える
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
