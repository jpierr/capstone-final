/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
