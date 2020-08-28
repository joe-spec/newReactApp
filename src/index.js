import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import App from './container/App';
// import Login from './component/login/login'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <App />,
    // <Login />,
  document.getElementById('root')
);

serviceWorker.unregister();
