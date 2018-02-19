import React from 'react';
import './AppBar.css';
import logo from './AppBar.logo.svg';

const AppBar = ({ title }) => (
<nav class="AppBar">
    <img class="AppBar-logo" src={logo} aria-label="people" alt="People" />
</nav>
);

export default AppBar;

