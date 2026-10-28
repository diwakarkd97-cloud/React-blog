import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">All</Link>
      <Link to="/fullstack">Full Stack</Link>
      <Link to="/datascience">Data Science</Link>
      <Link to="/cybersecurity">Cyber Security</Link>
      <Link to="/ai">AI</Link>
    </nav>
  );
};

export default NavBar;