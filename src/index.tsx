import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './home'
import AboutPage from './about';
import CSPage from './compsci';
import BEEPage from './bioeng';
import SpecPage from './specializations';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router><Pages /></Router>
  </React.StrictMode>
);

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/specializations" Component={SpecPage} />
        <Route path="/compsci" Component={CSPage} />
        <Route path="/bioeng" Component={BEEPage} />
      </Routes>
    </div>
  );
}