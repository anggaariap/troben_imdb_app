import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDB Logo" />
      </div>
      <div className="navbar-links">
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/popular" activeClassName="active">
          Popular Movies
        </NavLink>
        <NavLink to="/search" activeClassName="active">
          Search
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
