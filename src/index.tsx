import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './css/built.css';
import App from './App';
import { unregister } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

unregister();
