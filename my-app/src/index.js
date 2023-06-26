import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ActionCableProvider } from 'react-actioncable-provider';
import registerServiceWorker from './registerServiceWorker';
import { API_WS_ROOT } from './constants';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ActionCableProvider url={API_WS_ROOT}>
    <App />
  </ActionCableProvider>
);

registerServiceWorker();