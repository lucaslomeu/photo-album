import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">ÁLBUM</Link>
      </div>
      <div className="link">
        <div className="about">
          <Link to="/sobre">SOBRE</Link>
        </div>
        <div className="contact">
          <Link to="/contato">CONTATO</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
