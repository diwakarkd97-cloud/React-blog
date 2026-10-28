import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Template = () => {
  return (
    <>
      {/* Wrap both componentsstick together as one block */}
      <div className="sticky-wrapper">
        <Header />
        <NavBar />
      </div>
      
      <Outlet />
    </>
  );
};

export default Template;