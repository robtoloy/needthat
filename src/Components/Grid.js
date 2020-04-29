import React from 'react';

import g1 from '../Assets/g1.png';
import g2 from '../Assets/g2.png';
import g3 from '../Assets/g3.png';
import g4 from '../Assets/g4.png';
import g5 from '../Assets/g5.png';
import g6 from '../Assets/g6.png';
import g7 from '../Assets/g7.png';
import g8 from '../Assets/g8.png';

const grid = () => {
  return (
    <div className="Grid-container">
      <div className="Grid-section-text mb-48">
        <h1>Deals on deal, yo. Bust down.</h1>
      </div>

      <div className="Grid-row">
        <div className="Grid-item">
          <img className="mb-12" src={g1} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
        <div className="Grid-item">
          <img className="mb-12" src={g2} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
        <div className="Grid-item">
          <img className="mb-12" src={g3} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
        <div className="Grid-item">
          <img className="mb-12" src={g4} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
      </div>

      <div className="mb-12"></div>

      <div className="Grid-row">
        <div className="Grid-item">
          <img className="mb-12" src={g5} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
        <div className="Grid-item">
          <img className="mb-12" src={g6} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
        <div className="Grid-item">
          <img className="mb-12" src={g7} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
        <div className="Grid-item">
          <img className="mb-12" src={g8} alt="product"/>
          <p>Product Name</p>
          <p className="grid-price">$38.00</p>
        </div>
      </div>
    </div>
  );
}

export default grid;
