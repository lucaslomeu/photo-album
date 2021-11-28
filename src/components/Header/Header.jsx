import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">ÁLBUM</div>
      <div className="link">
        <div className="about">
          <p>SOBRE</p>
        </div>
        <div className="contact">
          <p>CONTATO</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
