import React from 'react';

import a1 from '../Assets/a1.jpg';
import a2 from '../Assets/a2.jpg';
import a3 from '../Assets/a3.jpg';
import a4 from '../Assets/a4.jpg';
import a5 from '../Assets/a5.jpg';

const affiliates = () => {
  return (
    <div className="Aff-container">
      <div className="Aff-row">
        <h2 className="mb-48 primary">Giving you the latest and greatest deals from our friends</h2>
        <div className="Aff-logos">
          <div className="Aff-logo">
            <img src={a1} className="Aff-logo" alt="Apple logo" />
          </div>
          <div className="Aff-logo">
            <img src={a2} className="Aff-logo" alt="Adidas logo" />
          </div>
          <div className="Aff-logo">
            <img src={a3} className="Aff-logo" alt="Best Buy logo" />
          </div>
          <div className="Aff-logo">
            <img src={a4} className="Aff-logo" alt="Amazon logo" />
          </div>
          <div className="Aff-logo">
            <img src={a5} className="Aff-logo" alt="Target logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default affiliates;
