import React from 'react';

import f1 from '../Assets/f1.png';
import f2 from '../Assets/f2.png';
import f3 from '../Assets/f3.png';
import f4 from '../Assets/f4.png';
import f5 from '../Assets/f5.png';
import f6 from '../Assets/f6.png';

const featured = () => {
  return (
    <div className="Featured-container">
      <div className="Featured-row">
        <ul className="Featured-items">
          <li>
            <img className="Featured-img" src={f1} />
            <p>Google Pixel</p>
          </li>
          <li>
            <img className="Featured-img" src={f2} />
            <p>Google Home Mini</p>
          </li>
          <li>
            <img className="Featured-img" src={f3} />
            <p>IoT Device</p>
          </li>
          <li>
            <img className="Featured-img" src={f4} />
            <p>Google Home</p>
          </li>
          <li>
            <img className="Featured-img" src={f5} />
            <p>Google Home Max</p>
          </li>
          <li>
            <img className="Featured-img" src={f6} />
            <p>Day Dream View</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default featured;
