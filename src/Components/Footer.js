import React from 'react';
import logoWhite from '../Assets/logo-white.png'

const footer = () => {
  return (
    <div className="Footer-container">
      <div className="Footer-row mb-24">
        <img src={logoWhite} className="Footer-logo" alt="NeedThat logo" />
      </div>
      <div className="Footer-row mb-48">
        <div className="Footer-col">
          <p className="white">Product</p>
          <p>How it works</p>
          <p>Benefits</p>
          <p>Affiliates</p>
        </div>
        <div className="Footer-col">
          <p className="white">About</p>
          <p>Blog</p>
          <p>Help</p>
          <p>FAQ</p>
        </div>
        <div className="Footer-col">
          <p className="white">Support</p>
          <p>Our Team</p>
          <p>Career</p>
          <p>Press</p>
        </div>
      </div>
      <div className="Footer-end">
        <small>© 2020  -  NeedThat  -  All right reserved</small>
      </div>
    </div>
  );
}

export default footer;
