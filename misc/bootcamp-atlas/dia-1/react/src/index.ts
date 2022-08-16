import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(React.createElement(App));
// root.render(<App />);

// setTimeout(() => root.unmount(), 5000);
