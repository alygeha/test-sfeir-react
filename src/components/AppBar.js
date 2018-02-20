import React from 'react';
import './AppBar.css';
import logo from './AppBar.logo.svg';
import { NavLink } from 'react-router-dom';

const AppBar = () => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
    <hr className="grow"/>
    <NavLink to="/discover">discover</NavLink>
    <NavLink to="/all">show all</NavLink>
  </nav>
);

export default AppBar;