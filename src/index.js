import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ProfileConfiguration from './ProfileConfiguration';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<ProfileConfiguration />, document.getElementById('profileConfig'));

registerServiceWorker();
