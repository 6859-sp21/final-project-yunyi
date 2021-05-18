import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import './index.scss';

// pages
import AboutPage from "./pages/about";
import BirthPage from "./pages/birth";
import MarriagePage from "./pages/marriage";

ReactDOM.render(
  <HashRouter>
    <Route exact path="/" component={AboutPage} />
    <Route exact path="/birth" component={BirthPage} />
    <Route exact path="/marriage" component={MarriagePage} />
  </HashRouter>,
  document.getElementById('root')
);

