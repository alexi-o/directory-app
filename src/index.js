import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
