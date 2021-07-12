import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const rootEl = document.getElementById('root');

render(<App test={true} />, rootEl);
