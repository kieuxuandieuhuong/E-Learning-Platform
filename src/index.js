import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './app/store';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Provider store={store}><App /></Provider>);
