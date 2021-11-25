import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">ALBUM</div>
      <div className="link">
        <p>About</p>
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Header;
