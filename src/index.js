import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pages from './components/Pages';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pages />, document.getElementById('root'));
registerServiceWorker();
