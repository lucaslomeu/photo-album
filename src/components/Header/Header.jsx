import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">ALBUM</div>
      <div className="link">
        <div className="about">
          <p>About</p>
        </div>
        <div className="contact">
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
