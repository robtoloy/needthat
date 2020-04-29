import React from 'react';
import logo from '../logo.svg';

const nav = () => {
  return (
    <div>
      <header className="App-header">
        <div className="Nav">
          <div className="Nav-link-container">
            <img src={logo} className="Logo" alt="logo" />
            <ul className="Nav-links">
              <li>Home</li>
              <li>Reviews</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="Btn-container">
            <button className="Btn">
              Get Deals
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default nav;
