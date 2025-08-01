import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import PersistLogin from './features/auth/PersistLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <PersistLogin />
      <Routes>

        <Route path="/*" element={<App />} />

      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
)