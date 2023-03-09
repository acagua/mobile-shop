import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterController } from './routes/RouterController';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterController />
  </React.StrictMode>,
);
