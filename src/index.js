import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.scss';

// pages
import AboutPage from "./pages/about";
import BirthPage from "./pages/birth";

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={AboutPage} />
    <Route exact path="/birth" component={BirthPage} />
  </HashRouter>,
  document.getElementById('root')
);

