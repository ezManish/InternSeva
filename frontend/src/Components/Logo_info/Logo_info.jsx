import React from 'react';
import './logo_info.css';

const Logo_info = () => {
  return (
    <div>
      <div className="container">
        <div>
          <img className="logo-img" src="src/assets/InternSeva_Logo_2_SVG.svg" alt="" />
        </div>

        <div className="info">
          <div className="name-sign">
            <h1>Hii Saransh Rana,</h1>
            <span>
              <img src="src/assets/waving-hand.svg" alt="" />
            </span>
          </div>

          <div className="content">
            <h2>Your gateway to opportunities, growth and learning</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo_info;
