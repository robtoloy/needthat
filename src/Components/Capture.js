import React from 'react';

const capture = () => {
  return (
    <div className="Capture-container">
      <div className="Capture-row">
        <h1>Get deals straight to your inbox</h1>
        <p className="mb-36 white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do.</p>
        <form className="Capture-form">
          <label>
            <input className="Capture-email" type="email" name="email" placeholder="Enter your email"/>
          </label>
          <input className="Capture-btn" type="submit" value="Get it" />
        </form>
      </div>
    </div>
  );
}

export default capture;
