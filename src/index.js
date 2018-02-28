import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import First from './common';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<First />, document.getElementById('root'));
registerServiceWorker();
