import React from 'react';

import c1 from '../Assets/c1.png';
import c2 from '../Assets/c2.png';

const curated = () => {
  return (
    <div className="Curated-container">
      <div className="Curated-row">
        <div className="Curated-column">
          <img className="Curated-img" src={c1} alt="Beats by Dre" />
          <div className="Curated-text">
            <h3>Beats By Dre</h3>
            <button className="Btn-outline">See Deal</button>
          </div>
        </div>
        <div className="Curated-column">
          <img className="Curated-img" src={c2} alt="Apple iPad Pro" />
          <div className="Curated-text">
            <h3>iPad Pro</h3>
            <button className="Btn-outline">See Deal</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default curated;
