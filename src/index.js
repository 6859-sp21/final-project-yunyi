import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.scss';

// pages
import AboutPage from "./pages/about";
import BeingPage from "./pages/being";

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={AboutPage} />
    <Route exact path="/being" component={BeingPage} />
  </HashRouter>,
  document.getElementById('root')
);

