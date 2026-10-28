import React from 'react';

const Header = () => {
  return (
    <div className="container">
      <div className="leftside">
        <h1>Logo</h1>
        <h2>Blog</h2>
        <div className="search-wrapper">
          <input placeholder="what do you want to read" />
          
          
          <button className="search-btn" type="button" aria-label="Search">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
        </div>
      </div>
      <div className="Rightside">
        <button className="Header-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Header;