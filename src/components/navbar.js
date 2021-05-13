import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ( {pageName=null} ) => {
  return (
    <div className="header">
      <div className="logo">
        Gender Inequality in China
      </div>
      <div className="navbar">
        <div className="navbar-item">
          <Link to="/birth">
            birth
          </Link>
        </div>
        <div className="navbar-item">
          school
        </div>
        <div className="navbar-item">
          work
        </div>
        <div className="navbar-item">
          marriage
        </div>
        <div className="navbar-item">
          inheritance
        </div>
      </div>
    </div>
  );
}

export default NavBar;