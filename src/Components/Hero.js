import React from 'react';

const hero = () => {
  return (
    <div className="Hero-container">
      <div className="Hero-row">
        <div className="Hero-content">
          <h1 className="Hero-title">You want this deal</h1>
          <h2>Smart lot device</h2>
          <p className="mb-24">This great product is consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <button className="Btn">See this deal</button>
        </div>
        <div className="Hero-controls">
          <span className="Hero-control-active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default hero;
