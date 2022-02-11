import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <header>
      <h1>Cyber Notes</h1>
      <div>
        <Link to="/">
          <h1>Home Card</h1>
=======
        <Link to="../../pages/Home.js">
          <h3>homepage</h3>

        </Link>
      </div>
      <div>
        <p>Simple App to write notes</p>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
